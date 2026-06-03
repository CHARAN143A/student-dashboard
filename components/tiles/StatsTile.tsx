'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Medal, Clock, TrendingUp } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'

const stats = [
  {
    label: 'Completed', value: 3,     unit: 'courses', icon: CheckCircle2,
    color: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10',
  },
  {
    label: 'Badges',    value: 12,    unit: 'earned',  icon: Medal,
    color: 'text-amber-400',   border: 'border-amber-500/20',   bg: 'bg-amber-500/10',
  },
  {
    label: 'Study Time', value: 47,   unit: 'hours',   icon: Clock,
    color: 'text-sky-400',     border: 'border-sky-500/20',     bg: 'bg-sky-500/10',
  },
  {
    label: 'This Week', value: '+18%', unit: 'progress', icon: TrendingUp,
    color: 'text-violet-400',  border: 'border-violet-500/20',  bg: 'bg-violet-500/10',
  },
]

export function StatsTile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.08 }}
      className="lg:col-span-4 col-span-full"
    >
      <BentoCard className="h-full" glowColor="rgba(139,92,246,0.12)">
        <div className="p-5 grid grid-cols-2 gap-3 h-full">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.08, type: 'spring', stiffness: 300, damping: 24 }}
                className={`flex flex-col justify-between p-3 rounded-xl border ${stat.border} ${stat.bg}`}
              >
                <Icon size={16} className={stat.color} />
                <div className="mt-3">
                  <p className={`text-xl font-display font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-[12px] text-text-muted mt-0.5 leading-tight">
                    <span className="text-text-secondary">{stat.label}</span>
                    <br />
                    {stat.unit}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </BentoCard>
    </motion.div>
  )
}
