import { Member } from "@/server/types"

export type GameRecord = {
  rank: number
  elo: number
  isFirstGame: boolean
  played: boolean
  member: Member
  won: boolean
  id: number
}
