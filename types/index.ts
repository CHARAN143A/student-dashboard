export interface Course {
  id: string
  title: string
  progress: number
  icon_name: string
  instructor?: string
  color_scheme?: string
  created_at: string
}

export interface ActivityDay {
  date: string
  count: number
  intensity: 0 | 1 | 2 | 3 | 4
}

export interface StudentProfile {
  name: string
  streak: number
  total_xp: number
  level: number
  avatar_initials: string
  completed_courses: number
  badges: number
}
