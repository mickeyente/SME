import { riskLevelFromScore, riskLevelLabel, riskLevelClasses } from '@/design-system/tokens'

type ScoreSealProps = {
  score: number // 0–100
  size?: 'sm' | 'lg'
  showLabel?: boolean
}

const SEAL_NOTCHES = 24 // fixed decorative ring — count doesn't encode data, purely the "stamp" texture

/**
 * The Seal: an official-stamp-styled gauge. This is the product's
 * signature visual — a business owner should learn to read this one
 * shape and trust it everywhere it appears (dashboard hero, list
 * chips, alert cards).
 */
export function ScoreSeal({ score, size = 'lg', showLabel = true }: ScoreSealProps) {
  const clamped = Math.max(0, Math.min(100, score))
  const level = riskLevelFromScore(clamped)
  const classes = riskLevelClasses[level]
  const dimension = size === 'lg' ? 180 : 56
  const radius = size === 'lg' ? 78 : 22
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - clamped / 100)

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <div className="relative" style={{ width: dimension, height: dimension }}>
        <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`} className="-rotate-90">
          {/* notch ring — the "stamp" texture */}
          {size === 'lg' &&
            Array.from({ length: SEAL_NOTCHES }).map((_, i) => {
              const angle = (i / SEAL_NOTCHES) * 2 * Math.PI
              const rOuter = dimension / 2 - 2
              const rInner = dimension / 2 - 7
              const cx = dimension / 2
              const cy = dimension / 2
              return (
                <line
                  key={i}
                  x1={cx + rInner * Math.cos(angle)}
                  y1={cy + rInner * Math.sin(angle)}
                  x2={cx + rOuter * Math.cos(angle)}
                  y2={cy + rOuter * Math.sin(angle)}
                  className="stroke-ink/15"
                  strokeWidth={2}
                />
              )
            })}
          {/* track */}
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            className="stroke-ink/10"
            strokeWidth={size === 'lg' ? 10 : 5}
          />
          {/* progress arc */}
          <circle
            cx={dimension / 2}
            cy={dimension / 2}
            r={radius}
            fill="none"
            strokeWidth={size === 'lg' ? 10 : 5}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className={classes.text}
            stroke="currentColor"
            style={{ transition: 'stroke-dashoffset 0.6s var(--ease-seal)' }}
          />
        </svg>
        {size === 'lg' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-data text-display text-ink">{clamped}</span>
            <span className="font-data text-caption text-ink-soft">/ 100</span>
          </div>
        )}
      </div>
      {showLabel && (
        <span className={`rounded-control px-3 py-1 text-small font-medium ring-1 ${classes.text} ${classes.bg} ${classes.ring}`}>
          {riskLevelLabel[level]}
        </span>
      )}
    </div>
  )
}
