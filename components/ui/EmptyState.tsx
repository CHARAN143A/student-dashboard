'use client'

import { motion } from 'framer-motion'
import { BookOpen, Plus } from 'lucide-react'
import { tileVariants } from '@/components/ui/BentoCard'

export function EmptyCoursesState() {
  return (
    <motion.div variants={tileVariants} className="col-span-full">
      <div className="rounded-2xl bg-bg-surface border border-dashed border-border-default p-10 flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-14 h-14 rounded-2xl bg-bg-elevated border border-border-default flex items-center justify-center">
          <BookOpen size={24} className="text-text-muted" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-text-primary text-sm mb-1">No courses yet</h3>
          <p className="text-text-muted text-xs max-w-xs">
            Insert rows into your Supabase{' '}
            <code className="font-mono bg-bg-elevated px-1 rounded">courses</code>{' '}
            table to see them here.
          </p>
        </div>
        <button className="flex items-center gap-2 text-xs text-brand-indigo border border-brand-indigo/40 hover:border-brand-indigo/80 px-4 py-2 rounded-lg transition-colors">
          <Plus size={13} />
          Add Course
        </button>
      </div>
    </motion.div>
  )
}
