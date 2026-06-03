'use client'

import { motion } from 'framer-motion'
import { Flame, Zap, Star } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'
import { getGreeting, type STUDENT_DATA } from '@/lib/utils'

interface HeroTileProps {
  student: typeof STUDENT_DATA
}

export function HeroTile({ student }: HeroTileProps) {
  const greeting = getGreeting()

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0 }}
      className="lg:col-span-8 col-span-full"
    >
      <BentoCard className="min-h-[200px]" glowColor="rgba(99,102,241,0.2)">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.18) 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(34,211,238,0.1) 0%, transparent 55%)',
          }}
        />

        <div className="relative p-6 lg:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 h-full">
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-text-muted text-xs font-mono tracking-widest uppercase"
            >
              {greeting}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="font-display text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight"
            >
              Welcome back,{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #60a5fa, #34d399)' }}
              >
                {student.name}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-text-secondary text-sm max-w-sm"
            >
              You&apos;re making incredible progress. Keep the momentum going today!
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-3">
            <StatPill
              icon={<Flame size={18} className="text-orange-400" />}
              value={student.streak}
              label="day streak"
              borderColor="border-orange-500/30"
              delay={0.45}
              pulse
            />
            <StatPill
              icon={<Zap size={18} className="text-purple-400" />}
              value={student.total_xp.toLocaleString()}
              label="total XP"
              borderColor="border-brand-violet/30"
              delay={0.55}
            />
            <StatPill
              icon={<Star size={18} className="text-cyan-400" />}
              value={`Lv.${student.level}`}
              label="rank"
              borderColor="border-brand-cyan/30"
              delay={0.65}
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-border-subtle">
          <motion.div
            className="h-full xp-gradient"
            initial={{ width: '0%' }}
            animate={{ width: '68%' }}
            transition={{ delay: 0.8, duration: 1.4, ease: 'easeOut' }}
          />
        </div>
      </BentoCard>
    </motion.div>
  )
}

function StatPill({
  icon, value, label, borderColor, delay, pulse,
}: {
  icon: React.ReactNode
  value: string | number
  label: string
  borderColor: string
  delay: number
  pulse?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 300, damping: 22 }}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-elevated/80 backdrop-blur border ${borderColor}`}
    >
      {pulse ? (
        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          {icon}
        </motion.div>
      ) : icon}
      <div>
        <p className="text-lg font-display font-bold text-text-primary leading-none">{value}</p>
        <p className="text-[10px] text-text-muted mt-0.5">{label}</p>
      </div>
    </motion.div>
  )
}
