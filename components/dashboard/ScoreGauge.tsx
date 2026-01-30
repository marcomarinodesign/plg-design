import { cn } from "@/lib/utils"

type ScoreGaugeProps = {
  value: number
  max?: number
  className?: string
}

const RADIUS = 80
const CENTER_X = 100
const CENTER_Y = 100
const SEMICIRCLE_LENGTH = Math.PI * RADIUS

const LIME_GREEN = "#a0d33e"
const DARK_OLIVE = "#5d852a"

export function ScoreGauge({
  value,
  max = 100,
  className,
}: ScoreGaugeProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const strokeDashLength = (percentage / 100) * SEMICIRCLE_LENGTH
  const needleRotation = 180 - (percentage / 100) * 180

  return (
    <svg
      viewBox="0 0 200 120"
      className={cn("mx-auto h-auto w-full max-w-[236.7px] min-h-[100px]", className)}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {/* Segmento derecho: verde oliva #5d852a (desde value hasta 100%) */}
      <path
        d={`M ${CENTER_X - RADIUS} ${CENTER_Y} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER_X + RADIUS} ${CENTER_Y}`}
        fill="none"
        stroke={DARK_OLIVE}
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={`${SEMICIRCLE_LENGTH - strokeDashLength} ${SEMICIRCLE_LENGTH}`}
        strokeDashoffset={-strokeDashLength}
        className="transition-[stroke-dashoffset] duration-500 ease-out"
      />
      {/* Segmento izquierdo: lima #a0d33e (desde 0 hasta value) */}
      <path
        d={`M ${CENTER_X - RADIUS} ${CENTER_Y} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER_X + RADIUS} ${CENTER_Y}`}
        fill="none"
        stroke={LIME_GREEN}
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={`${strokeDashLength} ${SEMICIRCLE_LENGTH}`}
        strokeDashoffset={0}
        className="transition-[stroke-dashoffset] duration-500 ease-out"
      />
      {/* Aguja flecha, verde oliva #5d852a, desde centro inferior */}
      <g transform={`rotate(${needleRotation} ${CENTER_X} ${CENTER_Y})`}>
        <polygon
          points={`${CENTER_X},${CENTER_Y - RADIUS + 4} ${CENTER_X - 8},${CENTER_Y + 6} ${CENTER_X + 8},${CENTER_Y + 6}`}
          fill={DARK_OLIVE}
          stroke={DARK_OLIVE}
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
