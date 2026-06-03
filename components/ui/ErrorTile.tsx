'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { tileVariants } from '@/components/ui/BentoCard'

interface ErrorTileProps {
  message?: string
}

export function ErrorTile({ message }: ErrorTileProps) {
  return (
    <motion.div variants={tileVariants} className="col-span-full">
      <div className="rounded-2xl bg-bg-surface border border-rose-500/30 p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[160px]">
        <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
          <AlertTriangle size={22} className="text-rose-400" />
        </div>
        <div className="space-y-1">
          <h3 className="font-display font-semibold text-text-primary text-sm">
            Couldn&apos;t load courses
          </h3>
          <p className="text-text-muted text-xs max-w-sm">
            {message || 'Failed to connect to the database. Check your Supabase configuration in .env.local'}
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors border border-border-default hover:border-border-bright px-4 py-2 rounded-lg"
        >
          <RefreshCw size={13} />
          Try again
        </button>
      </div>
    </motion.div>
  )
}
