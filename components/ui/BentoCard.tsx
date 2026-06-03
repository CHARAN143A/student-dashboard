'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const tileVariants = {
  hidden:   { opacity: 0, y: 22 },
  visible:  {
    opacity: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 24 },
  },
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  noiseOverlay?: boolean
}

export function BentoCard({
  children,
  className,
  glowColor = 'rgba(99,102,241,0.15)',
  noiseOverlay = true,
}: BentoCardProps) {
  return (
    <motion.article
      variants={tileVariants}
      whileHover={{
        scale: 1.016,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className={cn(
        'relative rounded-2xl bg-bg-surface border border-border-subtle overflow-hidden bento-card',
        noiseOverlay && 'noise-overlay',
        className
      )}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            boxShadow: `inset 0 0 0 1px ${glowColor}, 0 0 28px ${glowColor}`,
          }}
        />
      </motion.div>

      <div className="relative h-full" style={{ zIndex: 3 }}>
        {children}
      </div>
    </motion.article>
  )
}
