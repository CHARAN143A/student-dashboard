'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

const mobileNavItems = [
  { id: 'dashboard',    label: 'Home',     icon: LayoutDashboard },
  { id: 'courses',      label: 'Courses',  icon: BookOpen }
]

export function MobileNav() {
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-bg-surface/95 backdrop-blur-xl border-t border-border-subtle"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {mobileNavItems.map((item) => {
          const Icon = item.icon
          const isActive = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl min-w-[52px]"
              aria-current={isActive ? 'page' : undefined}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-active"
                  className="absolute inset-0 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <Icon
                size={18}
                className={cn(
                  'relative z-10 transition-colors',
                  isActive ? 'text-brand-indigo' : 'text-text-muted'
                )}
              />
              <span
                className={cn(
                  'relative z-10 text-[10px] font-medium transition-colors',
                  isActive ? 'text-text-primary' : 'text-text-muted'
                )}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
