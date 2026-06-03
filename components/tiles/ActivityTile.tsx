'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'
import { generateActivityData } from '@/lib/utils'

const intensityClasses = [
  'bg-bg-elevated',
  'bg-brand-indigo/25',
  'bg-brand-indigo/50',
  'bg-brand-indigo/75',
  'bg-brand-indigo',
]

export function ActivityTile() {
  const data = generateActivityData()

  const weeks: typeof data[] = []
  for (let i = 0; i < data.length; i += 7) weeks.push(data.slice(i, i + 7))

  const totalActivity = data.reduce((s, d) => s + d.count, 0)
  const activeDays    = data.filter((d) => d.count > 0).length

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.28 }}
      className="lg:col-span-6 md:col-span-2 col-span-full"
    >
      <BentoCard className="h-full" glowColor="rgba(34,211,238,0.1)">
        <div className="p-5 lg:p-6 h-full flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center">
                <Activity size={15} className="text-brand-cyan" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-sm text-text-primary">Learning Activity</h2>
                <p className="text-[11px] text-text-muted">Last 17 weeks</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-right">
              <div>
                <p className="text-lg font-display font-bold text-text-primary">{activeDays}</p>
                <p className="text-[10px] text-text-muted">active days</p>
              </div>
              <div>
                <p className="text-lg font-display font-bold text-text-primary">{totalActivity}</p>
                <p className="text-[10px] text-text-muted">contributions</p>
              </div>
            </div>
          </div>
          <div className="flex gap-1 overflow-x-auto pb-1 flex-1">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1 shrink-0">
                {week.map((day, di) => (
                  <motion.div
                    key={day.date}
                    title={`${day.date}: ${day.count} activities`}
                    className={`activity-cell w-3 h-3 rounded-sm ${intensityClasses[day.intensity]}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.35 + wi * 0.018 + di * 0.004,
                      type: 'spring',
                      stiffness: 400,
                      damping: 20,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-text-muted">Less</span>
            {intensityClasses.map((cls, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
            ))}
            <span className="text-[10px] text-text-muted">More</span>
          </div>
        </div>
      </BentoCard>
    </motion.div>
  )
}
