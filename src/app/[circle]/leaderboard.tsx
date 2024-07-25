"use client"

import { useState } from "react"
import Chart from "./_components/data/chart"
import Leaderboard from "./_components/data/leaderboard"
import { GameWithResults, Member, Stat } from "./types"

type Props = {
  recentGames: GameWithResults[]
  stats: Stat[]
  circleId: number
}

export default function CircleClient({ recentGames, stats, circleId }: Props) {
  const recentWinners = [...recentGames]
    .slice(0, 3)
    .map((game) => game.game_results.find((r) => r.winner)!.member_id)

  const [selectedMemberId, setSelectedMemberId] = useState(stats[0]?.member_id || 0)

  return (
    <div className="flex justify-center gap-0 rounded-lg">
      <div className="bg-dot-grid relative flex basis-2/3 justify-end overflow-hidden py-2">
        <Chart games={recentGames} stats={stats} highlight={selectedMemberId} />
      </div>

      <div className="flex basis-1/3 py-2">
        <Leaderboard
          recentWinners={recentWinners}
          stats={stats}
          highlightId={selectedMemberId}
          onHighlightChange={(id) => setSelectedMemberId(id)}
        />
      </div>
    </div>
  )
}
