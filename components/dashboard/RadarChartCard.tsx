"use client"

import type { RadarArea } from "@/lib/dashboard-types"
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"
import { cn } from "@/lib/utils"

type RadarChartCardProps = {
  data: RadarArea[]
  title?: string
  className?: string
}

export function RadarChartCard({
  data,
  title = "Desglose por áreas",
  className,
}: RadarChartCardProps) {
  return (
    <div
      className={cn(
        "flex min-h-[360px] w-full max-w-[418px] flex-col rounded-2xl bg-white p-4",
        className
      )}
    >
      <h3 className="w-full shrink-0 text-center text-xl font-bold text-black">
        {title}
      </h3>
      <div className="mt-3 min-h-[240px] min-w-[280px] flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart
            cx="50%"
            cy="50%"
            outerRadius="75%"
            data={data}
            margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
          >
            <PolarGrid stroke="#ebebeb" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#000", fontSize: 11 }}
              tickLine={false}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: "#6a6a6a", fontSize: 10 }}
              tickCount={5}
            />
            <Radar
              name="Score"
              dataKey="value"
              stroke="#beff50"
              fill="#beff50"
              fillOpacity={0.35}
              strokeWidth={1.5}
            />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
