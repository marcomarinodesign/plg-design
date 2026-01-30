import { ScoreHeroCard } from "@/components/dashboard/ScoreHeroCard"
import { RadarChartCard } from "@/components/dashboard/RadarChartCard"
import { FeedbackCarouselCard } from "@/components/dashboard/FeedbackCarouselCard"
import { ScoreMetricCard } from "@/components/dashboard/ScoreMetricCard"
import { dashboardMockData } from "@/lib/dashboard-mock-data"
import Image from "next/image"

export const metadata = {
  title: "Dashboard | Plinng Score",
  description: "Tu puntuación Plinng y desglose por áreas",
}

export default function DashboardPage() {
  const { hero, radarAreas, feedbackItems, scoreMetrics } = dashboardMockData

  return (
    <div className="min-h-screen bg-[#beff50]">
      <main className="container-padding-x section-padding-y mx-auto max-w-7xl font-(family-name:--font-inter)">
        <div className="mb-10 flex justify-start">
          <Image
            src="/logo-plinng.png"
            alt="Plinng"
            width={120}
            height={40}
            className="mt-4 h-10 w-auto object-contain object-left"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch md:gap-4 lg:gap-5">
          {/* Columna izquierda: tarjeta hero */}
          <div className="flex justify-center md:justify-start">
            <ScoreHeroCard hero={hero} className="h-full shrink-0" />
          </div>

          {/* Columna central: radar + feedback */}
          <div className="flex flex-col gap-4 md:gap-4 lg:gap-5">
            <RadarChartCard data={radarAreas} />
            <FeedbackCarouselCard items={feedbackItems} />
          </div>

          {/* Columna derecha: grid 2x3 de métricas */}
          <div className="grid grid-cols-2 gap-2.5">
            {scoreMetrics.map((metric) => (
              <ScoreMetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
