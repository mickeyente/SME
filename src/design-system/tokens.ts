/**
 * Single source of truth for risk-state → visual mapping.
 * Every component that shows a score, chip, or alert should
 * import from here rather than hard-coding colors, so Phase 4/5
 * alert logic and Phase 1 score cards never drift apart.
 */

export type RiskLevel = 'safe' | 'caution' | 'risk'

export const riskLevelFromScore = (score: number): RiskLevel => {
  if (score >= 75) return 'safe'
  if (score >= 45) return 'caution'
  return 'risk'
}

export const riskLevelLabel: Record<RiskLevel, string> = {
  safe: 'Compliant',
  caution: 'Moderately compliant',
  risk: 'Needs attention',
}

export const riskLevelClasses: Record<RiskLevel, { text: string; bg: string; ring: string }> = {
  safe: { text: 'text-safe', bg: 'bg-safe/10', ring: 'ring-safe/30' },
  caution: { text: 'text-caution', bg: 'bg-caution/10', ring: 'ring-caution/30' },
  risk: { text: 'text-risk', bg: 'bg-risk/10', ring: 'ring-risk/30' },
}
