'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ProgressBarProps {
  value: number    
  color?: string
  height?: number
  delay?: number
}

export function ProgressBar({
  value,
  color = '#6366f1',
  height = 5,
  delay = 0,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className="w-full rounded-full overflow-hidden bg-bg-elevated"
      style={{ height }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full rounded-full relative overflow-hidden"
        style={{ backgroundColor: color }}
        initial={{ width: '0%' }}
        animate={inView ? { width: `${value}%` } : { width: '0%' }}
        transition={{
          delay: delay + 0.25,
          duration: 1.1,
          ease: [0.34, 1.2, 0.64, 1],
        }}
      >
        <div className="absolute inset-0 progress-shimmer" />
      </motion.div>
    </div>
  )
}
