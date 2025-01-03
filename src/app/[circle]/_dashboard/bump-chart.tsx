"use client"

import * as d3 from "d3"
import { AnimatePresence, motion } from "framer-motion"
import { useMemo } from "react"
import { GameWithResults } from "../../../server/types"
import { MembersWithStats } from "@/server/queries"

type Props = {
  membersWithStats: MembersWithStats
  games: GameWithResults[]
  highlight: number
}

type GameRecord = {
  game_id: number
  rank: number
  played: boolean
  won: boolean
  isFirstGame: boolean
}
type MemberStat = {
  member_id: number
  elo: number
  first_game: number
  latest_game: number
  name: string
}
export default function BumpChart({ membersWithStats, games: games, highlight }: Props) {
  const gamesByMember = useMemo(() => {
    let gamesByMember: Record<number, GameRecord[]> = {}

    // will mutate while looping through games
    const rollingStats = membersWithStats
      .filter((s) => s.latest_game[0])
      .reduce(
        (acc, s) => ({
          ...acc,
          [s.id]: {
            member_id: s.id,
            elo: s.latest_game[0].elo,
            first_game: s.first_game[0].game_id,
            latest_game: s.latest_game[0].game_id,
            name: s.name,
          } as MemberStat,
        }),
        {},
      ) as Record<number, MemberStat>

    // loop through games starting with the most recent one
    games.forEach((game, i) => {
      // collect list of members who played in this round
      const membersWhoPlayed = new Set<number>()
      const membersWhoWon = new Set<number>()

      // update elo for this round
      game.game_results.forEach((result) => {
        if (!rollingStats[result.member_id]) return

        membersWhoPlayed.add(result.member_id)
        if (result.winner) membersWhoWon.add(result.member_id)
        rollingStats[result.member_id].elo = result.elo
      })

      // sort members by elo to determine rank for this round
      const sortedStats = Object.values(rollingStats).sort((a, b) => b.elo! - a.elo!)

      sortedStats.forEach((s, i) => {
        gamesByMember[s.member_id!] = gamesByMember[s.member_id!] || []

        gamesByMember[s.member_id!].push({
          game_id: game.id,
          rank: i,
          played: membersWhoPlayed.has(s.member_id!),
          won: membersWhoWon.has(s.member_id!),
          isFirstGame: s.first_game === game.id,
        })

        if (s.first_game === game.id) {
          delete rollingStats[s.member_id!]
        }
      })

      game.game_results.forEach((result) => {
        if (!rollingStats[result.member_id]) return
        rollingStats[result.member_id].elo = result.previous_elo
      })

      return
    })

    return gamesByMember
  }, [games, membersWithStats])

  if (!gamesByMember) return null

  const width = games.length * 45
  const lineHeight = 32
  const height = membersWithStats.length * lineHeight

  // Create scales
  const x = d3
    .scaleBand()
    .paddingInner(1)
    .domain(games.map((g) => g.id.toString()))
    .range([width - 4, 4])

  const y = d3
    .scaleLinear()
    .domain([0, membersWithStats.length])
    .range([15, height + 15])

  // Create line generator
  const line = d3
    .line<GameRecord>()
    .defined((d) => d !== undefined)
    .x((record) => x(record.game_id.toString())!)
    .y((record) => y(record.rank))
    .curve(d3.curveMonotoneX)

  const selectedData = gamesByMember[highlight]

  return (
    <div className={`h-[${height}px] flex w-fit justify-end`}>
      <svg
        vectorEffect="non-scaling-stroke"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
      >
        {Object.entries(gamesByMember).map(([memberId, data], i) => (
          <g key={`m-${memberId}`}>
            <motion.path
              key={`m-${memberId}`}
              d={line(data)!}
              strokeWidth={1}
              fill="none"
              className="stroke-neutral-300 dark:stroke-neutral-500"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: {
                  duration: gamesByMember[+memberId].length * 0.05,
                  type: "tween",
                },
              }}
            ></motion.path>

            {data[data.length - 1].isFirstGame && (
              <motion.circle
                cx={x(data[data.length - 1].game_id.toString())!}
                cy={y(data[data.length - 1].rank)}
                r={2}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: gamesByMember[+memberId].length * 0.05 },
                }}
                className="fill-background stroke-neutral-300 dark:fill-black dark:stroke-neutral-500"
              ></motion.circle>
            )}
          </g>
        ))}

        {selectedData && (
          <AnimatePresence>
            <motion.path
              key={"selected" + highlight}
              d={line(selectedData)!}
              className="stroke-accent"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            ></motion.path>

            {selectedData
              .filter((r) => r.played)
              .map((record, i) => (
                <motion.circle
                  key={`${highlight}-${record.game_id}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: i * 0.02, duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  cx={x(record.game_id.toString())!}
                  cy={y(record.rank)}
                  strokeWidth={2}
                  r={3}
                  className={`stroke-accent ${
                    record.won ? "fill-accent" : "fill-background dark:fill-black"
                  }`}
                ></motion.circle>
              ))}
          </AnimatePresence>
        )}
      </svg>
    </div>
  )
}
