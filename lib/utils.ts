import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ActivityDay } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = []
  const now = new Date()

  for (let i = 119; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    const rand = Math.random()
    let count = 0
    let intensity: 0 | 1 | 2 | 3 | 4 = 0

    if (rand > 0.42) {
      count = Math.floor(Math.random() * 8) + 1
      if (count <= 2) intensity = 1
      else if (count <= 4) intensity = 2
      else if (count <= 6) intensity = 3
      else intensity = 4
    }

    days.push({
      date: date.toISOString().split('T')[0],
      count,
      intensity,
    })
  }

  return days
}

export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export const STUDENT_DATA = {
  name: 'Anti Charan',
  streak: 14,
  total_xp: 4820,
  level: 7,
  avatar_initials: 'AC',
  completed_courses: 3,
  badges: 12,
}

export const COURSE_COLORS: Record<string, { from: string; to: string; glow: string; border: string }> = {
  indigo: { from: '#6366f1', to: '#4f46e5', glow: 'rgba(99,102,241,0.35)', border: 'rgba(99,102,241,0.3)' },
  cyan:   { from: '#22d3ee', to: '#0891b2', glow: 'rgba(34,211,238,0.3)',   border: 'rgba(34,211,238,0.25)' },
  emerald:{ from: '#10b981', to: '#059669', glow: 'rgba(16,185,129,0.3)',   border: 'rgba(16,185,129,0.25)' },
  amber:  { from: '#f59e0b', to: '#d97706', glow: 'rgba(245,158,11,0.3)',   border: 'rgba(245,158,11,0.25)' },
  violet: { from: '#8b5cf6', to: '#7c3aed', glow: 'rgba(139,92,246,0.3)',   border: 'rgba(139,92,246,0.25)' },
  rose:   { from: '#f43f5e', to: '#e11d48', glow: 'rgba(244,63,94,0.3)',    border: 'rgba(244,63,94,0.25)' },
}

export function getCourseColor(index: number) {
  const keys = Object.keys(COURSE_COLORS)
  return COURSE_COLORS[keys[index % keys.length]]
}
