import type { LucideIcon } from "lucide-react"

export type RadarArea = {
  subject: string
  value: number
  fullMark: number
}

export type FeedbackItem = {
  id: string
  title: string
  description: string
}

export type ScoreMetric = {
  id: string
  label: string
  score: number
  icon: LucideIcon
}

export type DashboardHero = {
  businessName: string
  plinngScore: number
  maxScore: number
  logoUrl?: string
}

export type DashboardData = {
  hero: DashboardHero
  radarAreas: RadarArea[]
  feedbackItems: FeedbackItem[]
  scoreMetrics: ScoreMetric[]
}
