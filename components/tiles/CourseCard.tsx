'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { BentoCard } from '@/components/ui/BentoCard'
import { DynamicIcon } from '@/components/ui/DynamicIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { getCourseColor } from '@/lib/utils'
import type { Course } from '@/types'

interface CourseCardProps {
  course: Course
  index: number
}

export function CourseCard({ course, index }: CourseCardProps) {
  const colors = getCourseColor(index)

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24, delay: 0.16 + index * 0.09 }}
      className="lg:col-span-3 md:col-span-1 col-span-full"
    >
      <BentoCard className="h-full min-h-[200px] cursor-pointer group" glowColor={colors.glow}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 100% 0%, ${colors.from}33 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, ${colors.to}1a 0%, transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative p-5 flex flex-col h-full gap-4">
          <div className="flex items-start justify-between">
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                boxShadow: `0 4px 18px ${colors.glow}`,
              }}
              whileHover={{ rotate: 6, transition: { type: 'spring', stiffness: 400, damping: 18 } }}
            >
              <DynamicIcon name={course.icon_name} size={18} className="text-white" />
            </motion.div>

            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.12 }}
            >
              <ArrowUpRight size={16} className="text-text-muted" />
            </motion.div>
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-sm text-text-primary leading-snug line-clamp-2">
              {course.title}
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider">Progress</span>
              <motion.span
                className="text-xs font-mono font-medium"
                style={{ color: colors.from }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {course.progress}%
              </motion.span>
            </div>
            <ProgressBar value={course.progress} color={colors.from} height={5} delay={index * 0.15} />
          </div>
        </div>
      </BentoCard>
    </motion.div>
  )
}
