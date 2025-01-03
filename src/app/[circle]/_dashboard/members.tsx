"use client"

import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { kickMember } from "@/server/actions"
import { MembersWithStats } from "@/server/queries"
import { cn } from "@/utils/tailwind/cn"
import { EllipsisVertical, ShieldCheck, Trash2 } from "lucide-react"
import { useMemo, useState } from "react"
import { useServerAction } from "zsa-react"
import { GameWithResults, Member } from "../../../server/types"
import HasAccess from "../_components/has-access"
import NumbersShuffler from "../_components/numbers-shuffler"
import Star from "../_components/star"
import InviteDialogContent from "./_components/invite-dialog-content"
import { LeadingCell, MiddleCell, Table, TableRow, TrailingCell } from "./_components/table"
import AddNewMember from "./add-new-member"

type Props = {
  circleId: number
  membersWithStats: MembersWithStats
  recentGames: GameWithResults[]
  onHighlightChange: (id: number) => void
  highlightId: number
  pendingMemberIds: number[]
}

export default function Members({
  circleId,
  highlightId,
  onHighlightChange,
  recentGames,
  membersWithStats,
  pendingMemberIds,
}: Props) {
  const newMembers = membersWithStats.filter((m) => m.latest_game.length === 0)
  const membersWithGames = membersWithStats.filter((m) => m.latest_game.length > 0)
  const ownerMembers = membersWithStats.filter((m) => !!m.user_id).map((m) => m.id)

  const winningStreaksByMemberId = useMemo(() => {
    if (!recentGames.length) return {}
    const latestWinners = recentGames.at(0)!.game_results.filter((r) => r.winner)

    const streaksById = Object.fromEntries(latestWinners.map((r) => [r.member_id, 1]))

    let currentStreak = 1
    let maxStreak = 3

    while (true && currentStreak < maxStreak) {
      const game = recentGames.at(currentStreak)
      if (!game) break

      let isMoving = false

      const winners = game.game_results.filter((r) => r.winner)

      if (!winners.length) break

      winners.forEach((r) => {
        if (streaksById[r.member_id] === currentStreak) {
          isMoving = true
          streaksById[r.member_id]++
        }
      })

      if (!isMoving) break
      currentStreak++
    }

    return streaksById
  }, [recentGames])

  return (
    <Table className="relative">
      {membersWithGames.map(({ latest_game, name, id }, i) => (
        <TableRow
          className={cn("group relative")}
          key={id}
          layoutId={"member-" + id}
          onMouseEnter={() => onHighlightChange(id!)}
        >
          <LeadingCell> {i + 1}</LeadingCell>
          <MiddleCell className={cn(highlightId === id && "text-accent dark:text-accent")}>
            {name}
            <span className="mx-1 tracking-widest">
              {Array.from({ length: winningStreaksByMemberId[id!] }, (v, i) => (
                <Star key={i} />
              ))}
            </span>
          </MiddleCell>
          <TrailingCell>
            <NumbersShuffler spin={pendingMemberIds.includes(id!)} value={latest_game?.[0]?.elo} />
          </TrailingCell>

          <HasAccess>
            {ownerMembers.includes(id!) ? (
              <Tooltip>
                <TooltipTrigger
                  tabIndex={-1}
                  className={cn(
                    "absolute -right-6 pl-2 text-neutral-300 outline-none",
                    "opacity-0 transition-opacity group-hover:opacity-100",
                    "cursor-default dark:text-neutral-700",
                  )}
                >
                  <ShieldCheck size={16} />
                </TooltipTrigger>
                <TooltipContent>Owner</TooltipContent>
              </Tooltip>
            ) : (
              <Dialog>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    tabIndex={-1}
                    className={cn(
                      "absolute -right-6 pl-2 text-neutral-300 outline-none",
                      "opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100",
                      "hover:text-neutral-600 data-[state=open]:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-300 dark:data-[state=open]:text-neutral-300",
                    )}
                  >
                    <EllipsisVertical size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="end">
                    <DialogTrigger>
                      <DropdownMenuItem>Invite as owner</DropdownMenuItem>
                    </DialogTrigger>
                  </DropdownMenuContent>
                </DropdownMenu>
                <InviteDialogContent circleId={circleId} memberId={id!} />
              </Dialog>
            )}
          </HasAccess>
        </TableRow>
      ))}
      {newMembers.map((m) => (
        <NewMemberRow member={m} key={m.id} circleId={circleId} />
      ))}

      <HasAccess>
        <div className="absolute -bottom-8 left-0 w-full">
          <AddNewMember circleId={circleId} showTooltip={membersWithStats.length < 2} />
        </div>
      </HasAccess>
    </Table>
  )
}

const NewMemberRow = ({ member: m, circleId }: { member: Member; circleId: number }) => {
  const { isPending, execute } = useServerAction(kickMember)
  const [hovered, setHovered] = useState(false)

  return (
    <TableRow
      className={cn("group", isPending && "animate-pulse")}
      key={m.id}
      layoutId={"member-" + m.id}
    >
      <LeadingCell className="text-sm text-neutral-200 dark:text-neutral-600">{"?"}</LeadingCell>
      <MiddleCell
        className={cn(
          "text-neutral-300 transition-all dark:text-neutral-600",
          (hovered || isPending) && "text-neutral-400 line-through dark:text-neutral-400",
        )}
      >
        {m.name}
      </MiddleCell>
      <HasAccess>
        <TrailingCell className="text-neutral-300 dark:text-neutral-500">
          <button
            className="flex cursor-default items-center justify-center rounded-md opacity-0 transition-colors hover:text-neutral-800 group-hover:opacity-100 dark:hover:text-neutral-200"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => execute({ id: m.id, circleId })}
          >
            <Trash2 size={16} strokeWidth={1.25} />
          </button>
        </TrailingCell>
      </HasAccess>
    </TableRow>
  )
}
