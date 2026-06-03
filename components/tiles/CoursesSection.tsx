'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { CourseCard } from './CourseCard'
import { ErrorTile } from '@/components/ui/ErrorTile'
import { EmptyCoursesState } from '@/components/ui/EmptyState'


function SkeletonBox({ className = '' }: { className?: string }) {
  return <div className={`skeleton rounded-xl ${className}`} />
}


export function CoursesSection() {

  // For demo purposes, using client side instead of serverside from Supabase
  // let courses

  // try {
  //   courses = await getCourses()
  // } catch (error) {
  //   const message = error instanceof Error ? error.message : 'Unknown error occurred'
  //   return <ErrorTile message={message} />
  // }

  // if (courses?.length === 0) {
  //   return <EmptyCoursesState />
  // }

  
  const [courses, setCourses] = useState([] as any[])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCourses() {
      try {
        const {data, error} = await supabase.from('courses').select('*')
        if (error) throw new Error(error.message)
        setCourses(data)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error occurred'
        setError(message)
      }
    }

    fetchCourses()
  }, [])

  if (error) {
    return <ErrorTile message={error} />
  }

  if (!courses) {
    return (
      <div className="rounded-2xl bg-bg-surface border border-border-subtle p-8 min-h-[200px] space-y-4">
        <SkeletonBox className="h-3 w-32" />
        <SkeletonBox className="h-9 w-64" />
        <SkeletonBox className="h-4 w-80" />
        <div className="flex gap-3 pt-2">
          {[0, 1, 2].map((i) => <SkeletonBox key={i} className="h-14 w-24 rounded-xl" />)}
        </div>
      </div>
    )
  }

  if (courses.length === 0) {
    return <EmptyCoursesState />
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  )
}
