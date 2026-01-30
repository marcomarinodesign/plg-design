import { ScoreHeroCard } from "@/components/dashboard/ScoreHeroCard"
import { RadarChartCard } from "@/components/dashboard/RadarChartCard"
import { FeedbackCarouselCard } from "@/components/dashboard/FeedbackCarouselCard"
import { ScoreMetricCard } from "@/components/dashboard/ScoreMetricCard"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { dashboardMockData } from "@/lib/dashboard-mock-data"

export const metadata = {
  title: "Dashboard | Plinng Score",
  description: "Tu puntuación Plinng y desglose por áreas",
}

export default function DashboardPage() {
  const { hero, radarAreas, feedbackItems, scoreMetrics } = dashboardMockData

  return (
    <div className="min-h-screen bg-[#f5f5eb]">
      <LpNavbar1 />
      <main className="container-padding-x section-padding-y mx-auto max-w-7xl font-(family-name:--font-inter)">
        <h1 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          Tu puntuación Plinng
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:items-stretch">
          {/* Columna izquierda: tarjeta hero */}
          <div className="flex justify-center xl:justify-start">
            <ScoreHeroCard hero={hero} className="h-full shrink-0" />
          </div>

          {/* Columna central: radar + feedback */}
          <div className="flex flex-col gap-5">
            <RadarChartCard data={radarAreas} />
            <FeedbackCarouselCard items={feedbackItems} />
          </div>

          {/* Columna derecha: grid 2x3 de métricas, gap 10px */}
          <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-2">
            {scoreMetrics.map((metric) => (
              <ScoreMetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
