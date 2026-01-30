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
        "flex w-full max-w-[418px] flex-col items-center rounded-[20px] border border-[#ebebeb] bg-white p-5",
        className
      )}
    >
      <h3
        className="w-full text-center text-black"
        style={{ fontSize: "20px", lineHeight: "28px", fontWeight: 700 }}
      >
        {title}
      </h3>
      <div
        className="mt-8 w-full"
        style={{ height: 225, minHeight: 225, minWidth: 280 }}
      >
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
