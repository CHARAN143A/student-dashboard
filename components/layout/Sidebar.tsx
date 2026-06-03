'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, ChevronLeft, ChevronRight, GraduationCap
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'dashboard',     label: 'Dashboard',     icon: LayoutDashboard },
  { id: 'courses',       label: 'My Courses',    icon: BookOpen }
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <motion.nav
      className="hidden md:flex flex-col h-full bg-bg-surface border-r border-border-subtle relative z-20 shrink-0 overflow-hidden"
      animate={{ width: collapsed ? 68 : 240 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      aria-label="Main navigation"
    >
      <div className="flex items-center h-16 py-16 justify-center">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-violet flex items-center justify-center">
          <GraduationCap size={24} className="text-white" />
        </div>
      </div>

      <div className="flex-1 px-2 pt-3 space-y-0.5 overflow-y-auto overflow-x-hidden">
        {navItems.map((item: any) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            collapsed={collapsed}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </div>
      
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-28 right-6 z-30 w-6 h-6 rounded-full bg-bg-elevated border border-border-default flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-bright transition-colors"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </motion.nav>
  )
}

function NavButton({
  item,
  isActive,
  collapsed,
  onClick,
}: {
  item: { id: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }
  isActive: boolean
  collapsed: boolean
  onClick: () => void
}) {
  const Icon = item.icon

  return (
    <button
      onClick={onClick}
      className={cn(
        'relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors group',
        collapsed && 'justify-center px-2',
        isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive && (
        <motion.span
          layoutId="nav-active-bg"
          className="nav-active-bg"
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
      )}

      {/* Hover bg */}
      {!isActive && (
        <span className="absolute inset-0 rounded-xl bg-bg-elevated opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      <Icon
        size={17}
        className={cn(
          'relative z-10 shrink-0 transition-colors',
          isActive ? 'text-brand-indigo' : 'text-text-muted group-hover:text-text-secondary'
        )}
      />

      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 font-medium text-sm whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      {isActive && collapsed && (
        <span className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-brand-indigo" />
      )}
    </button>
  )
}
