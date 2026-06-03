import { createSupabaseServerClient } from './supabase-server'
import type { Course } from '@/types'

export async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseServerClient()

  const { data, error } = await supabase.from('courses').select('*')

  if (error) {
    console.error('Supabase error fetching courses:', error.message)
    throw new Error(`Failed to fetch courses: ${error.message}`)
  }

  return data as any[]
}
