"use client"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { DashboardHero } from "@/lib/dashboard-types"
import { useCountUp } from "@/lib/use-count-up"
import { Share2, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

type ScoreHeroCardProps = {
  hero: DashboardHero
  className?: string
}

export function ScoreHeroCard({ hero, className }: ScoreHeroCardProps) {
  const scoreDisplay = useCountUp(hero.plinngScore, { duration: 800 })
  return (
    <Card
      className={cn(
        "flex w-full max-w-[418px] flex-col gap-2 border-0 rounded-2xl bg-[#dbff95] p-4 xl:h-[576px] xl:min-h-[576px]",
        className
      )}
    >
      <CardContent className="flex flex-1 flex-col items-center justify-between gap-2.5 px-0 pt-10 pb-10">
        {/* Logo placeholder: 70px, círculo blanco borde fino */}
        <div
          className="size-[70px] shrink-0 rounded-full border border-white bg-white object-cover shadow-sm"
          aria-hidden
        >
          <div className="flex size-full items-center justify-center rounded-full bg-white">
            <Wrench className="size-8 text-[#f59e0b]" aria-hidden />
          </div>
        </div>

        {/* Nombre empresa */}
        <b className="text-center text-lg font-bold tracking-tight leading-8 text-black">
          {hero.businessName}
        </b>

        {/* Plinng Score */}
        <div className="flex w-[293px] flex-col items-center justify-center gap-0">
          <div className="w-full text-center text-3xl font-extrabold tracking-tight text-black md:text-4xl">
            Plinng Score
          </div>
          <div className="flex items-baseline justify-center gap-0.5">
            <span className="tabular-nums text-5xl font-medium text-black md:text-7xl">
              {scoreDisplay}
            </span>
            <span className="align-top text-xl font-medium text-black">
              /{hero.maxScore}
            </span>
          </div>
        </div>

        {/* Gráfico de score */}
        <div className="w-full max-w-[180px] shrink-0">
          <Image
            src="/score-graph.png"
            alt=""
            width={180}
            height={90}
            className="h-auto w-full object-contain"
            aria-hidden
          />
        </div>
      </CardContent>
      <CardFooter className="mt-auto shrink-0 px-0 pb-0 pt-0">
        <div className="flex w-full items-center gap-5 text-sm font-medium leading-6 text-white">
          <Button
            variant="dark"
            className="h-[52px] flex-1 rounded-[36px] px-4 py-2.5 font-medium"
          >
            Activa Plinng Pro
          </Button>
          <Button
            variant="outline"
            className="h-[52px] flex-1 gap-2 rounded-[36px] border border-black bg-white px-4 py-2.5 font-medium text-black hover:bg-white/90 hover:text-black"
          >
            <Share2 className="size-4" aria-hidden />
            Compartir
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
