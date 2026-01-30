"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { FeedbackItem } from "@/lib/dashboard-types"
import { ThumbsUp } from "lucide-react"
import { cn } from "@/lib/utils"

type FeedbackCarouselCardProps = {
  items: FeedbackItem[]
  title?: string
  className?: string
}

export function FeedbackCarouselCard({
  items,
  title = "QUE HACES BIEN",
  className,
}: FeedbackCarouselCardProps) {
  return (
    <div
      className={cn(
        "flex h-[230px] w-full max-w-[418px] items-center gap-4 rounded-2xl border border-border bg-muted/30 p-4 shadow-sm",
        className
      )}
    >
      <Carousel
        opts={{ align: "start", loop: true }}
        className="flex w-full flex-1 flex-col"
      >
        <div className="flex min-h-0 flex-1 items-center gap-4">
          <CarouselPrevious
            variant="outline"
            size="icon"
            className="!relative !left-0 !top-0 h-8 w-8 shrink-0 !translate-x-0 !translate-y-0 rounded-[30px] border-border bg-muted hover:bg-muted/80"
          />
          <div className="min-w-0 flex-1 overflow-hidden">
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex flex-col gap-2 pl-4"
              >
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide leading-5 text-black">
                  <ThumbsUp className="size-4 shrink-0" aria-hidden />
                  {title}
                </div>
                <p className="font-semibold leading-tight text-black">
                  {item.title}
                </p>
                <p className="text-base leading-7 text-black/90">
                  {item.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          </div>
          <CarouselNext
            variant="outline"
            size="icon"
            className="!relative !left-0 !top-0 h-8 w-8 shrink-0 !translate-x-0 !translate-y-0 rounded-[30px] border-border bg-muted hover:bg-muted/80"
          />
        </div>
      </Carousel>
    </div>
  )
}
