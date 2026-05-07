import * as React from "react"

interface ProgressProps {
  value?: number
}

export function Progress({ value = 0 }: ProgressProps) {
  return (
    <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
      <div
        className="bg-primary h-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}