"use client"

import Button from "@/components/button/big-button"
import Dialog from "@/components/dialog/dialog"
import MemberPill from "@/components/member-pill"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createGameSession } from "../../../queries/get-members"
import { Member } from "../../../../server/types"

type Props = {
  members: Member[]
  circleId: number
  onClose: () => void
}

type MemberStatus = "none" | "losing" | "wining"

export default function NewGameDialog({ members, onClose, circleId }: Props) {
  const router = useRouter()
  let [statusMap, setStatusMap] = useState<Record<number, MemberStatus>>({})

  const handleClick = (member: Member) => {
    const prev = statusMap[member.id] || "none"
    const next = ({ none: "losing", losing: "wining", wining: "none" } as const)[prev]
    setStatusMap({ ...statusMap, [member.id]: next })
  }

  const loserIds = members.filter((m) => statusMap[m.id] === "losing").map((m) => m.id)
  const winnerIds = members.filter((m) => statusMap[m.id] === "wining").map((m) => m.id)

  const submit = async () => {
    onClose()
    await createGameSession({ loserIds, winnerIds, circleId })
    router.refresh()
  }

  const isValid = loserIds.length > 0 && winnerIds.length > 0

  return (
    <Dialog
      title="Who's winning today?"
      subtitle={
        <>
          Tap once for <span className="font-bold text-gray-900 dark:text-gray-200">losers</span>,
          twice for <span className="font-bold text-yellow-600">winners</span>
        </>
      }
      content={
        <>
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2">
            {members.map((m) => (
              <MemberPill
                key={m.id}
                color={
                  statusMap[m.id] === "losing"
                    ? "highlight"
                    : statusMap[m.id] === "wining"
                      ? "golden"
                      : undefined
                }
                onClick={() => handleClick(m)}
              >
                {m.name}
              </MemberPill>
            ))}
          </div>
        </>
      }
      footer={
        <>
          <>
            <Button secondary onClick={onClose}>
              close
            </Button>
            <Button disabled={!isValid} onClick={() => submit()}>
              add new game
            </Button>
          </>
        </>
      }
      onClose={onClose}
    ></Dialog>
  )
}
