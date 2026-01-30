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
        "flex w-full max-w-[418px] flex-col items-center rounded-2xl border border-border bg-white p-5 shadow-sm",
        className
      )}
    >
      <h3 className="w-full text-center text-xl font-bold text-black">
        {title}
      </h3>
      <div className="mt-8 h-[225px] min-h-[225px] w-full min-w-[280px]">
        <ResponsiveContainer width="100%" height={225}>
          <RechartsRadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={data}
            margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
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
