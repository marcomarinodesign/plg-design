"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { ScoreMetric } from "@/lib/dashboard-types"
import { useCountUp } from "@/lib/use-count-up"
import { cn } from "@/lib/utils"
import Image from "next/image"

type ScoreMetricCardProps = {
  metric: ScoreMetric
  maxScore?: number
  className?: string
}

export function ScoreMetricCard({
  metric,
  maxScore = 100,
  className,
}: ScoreMetricCardProps) {
  const iconIsImage = typeof metric.icon === "string"
  const IconComponent = iconIsImage ? null : metric.icon
  const scoreDisplay = useCountUp(metric.score, { duration: 700 })
  const percentage = Math.min(100, Math.max(0, (metric.score / maxScore) * 100))

  return (
    <Card
      className={cn(
        "flex h-[179px] w-full max-w-[196px] flex-col items-start justify-between gap-2 rounded-2xl bg-white p-4",
        className
      )}
    >
      <CardContent className="flex w-full flex-1 flex-col justify-between gap-2 p-0">
        <div className="flex flex-col gap-2">
          {iconIsImage ? (
            <Image
              src={metric.icon}
              alt=""
              width={24}
              height={24}
              className="size-6 shrink-0 object-contain"
              aria-hidden
            />
          ) : IconComponent ? (
            <IconComponent className="size-6 shrink-0 text-black" aria-hidden />
          ) : null}
          <b className="text-3xl font-bold tabular-nums tracking-tight text-black">
            {scoreDisplay}/{maxScore}
          </b>
          <p className="text-base font-medium leading-6 text-black">
            {metric.label}
          </p>
        </div>
        <Progress
          value={percentage}
          className="h-2 w-full rounded-[40px] bg-[#ebebeb] [&_[data-slot=progress-indicator]]:bg-[#e89e1b]"
        />
      </CardContent>
    </Card>
  )
}
