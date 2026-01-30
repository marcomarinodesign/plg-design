"use client"

import { useEffect, useState } from "react"

/**
 * Ease-out cubic: rápido al inicio, suave al final
 */
function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3
}

type UseCountUpOptions = {
  /** Duración de la animación en ms */
  duration?: number
  /** Si false, muestra el valor final sin animar */
  enabled?: boolean
}

/**
 * Hook que anima un número desde 0 hasta `target` al montar.
 * Pensado para scores: el valor sube rápido hasta el valor mostrado.
 */
export function useCountUp(
  target: number,
  options: UseCountUpOptions = {}
): number {
  const { duration = 700, enabled = true } = options
  const [displayValue, setDisplayValue] = useState(enabled ? 0 : target)

  useEffect(() => {
    if (!enabled || target <= 0) {
      setDisplayValue(target)
      return
    }

    let startTime: number | null = null
    let rafId: number

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setDisplayValue(Math.round(eased * target))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, enabled])

  return displayValue
}
