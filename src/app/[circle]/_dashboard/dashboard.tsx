"use client"

import { useState } from "react"
import { GameWithResults, Stat } from "../../../server/types"
import BumpChart from "./bump-chart"
import Rankings from "./rankings"

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
    <div className="flex flex-col-reverse justify-center gap-10 rounded-lg px-4 sm:flex-row sm:gap-0 sm:px-4">
      <div className="bg-dot-grid relative flex w-full flex-1 justify-end self-end overflow-hidden">
        <BumpChart games={recentGames} stats={stats} highlight={selectedMemberId} />
      </div>

      <div className="flex sm:w-56">
        <Rankings
          recentWinners={recentWinners}
          stats={stats}
          highlightId={selectedMemberId}
          onHighlightChange={(id) => setSelectedMemberId(id)}
        />
      </div>
    </div>
  )
}
