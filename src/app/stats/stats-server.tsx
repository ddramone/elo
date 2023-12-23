import { supabase } from "@/supabase"
import StatsClient from "./stats-client"
import { GameWithGameResults } from "./types"

export default async function StatsServer() {
  const { data: stats } = await supabase
    .from("members_stats")
    .select("*")
    .filter("total_games", "gt", 4)
    .order("elo", { ascending: false })

  const { data: recentGames }: { data: GameWithGameResults[] | null } = await supabase
    .from("games")
    .select("*, game_results(*)")
    .order("created_at", { ascending: false })
    .limit(20)

  if (!recentGames) return null
  if (!stats) return null

  const recentWinners = recentGames
    .slice(0, 3)
    .map((game) => game.game_results.find((result) => result.winner === true)?.member_id)
    .filter(Boolean) as number[]

  return <StatsClient stats={stats} recentWinners={recentWinners} recentGames={recentGames} />
}
