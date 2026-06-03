import { Suspense } from 'react'
import { BentoGrid } from '@/components/layout/BentoGrid'
import { HeroTile } from '@/components/tiles/HeroTile'
import { StatsTile } from '@/components/tiles/StatsTile'
import { CoursesSection } from '@/components/tiles/CoursesSection'
import { ActivityTile } from '@/components/tiles/ActivityTile'
import { CoursesSkeleton } from '@/components/ui/Skeletons'
import { STUDENT_DATA } from '@/lib/utils'

export default function DashboardPage() {
  return (
    <BentoGrid>
      <HeroTile student={STUDENT_DATA} />
      <StatsTile />
      <Suspense fallback={<CoursesSkeleton />}>
        <CoursesSection />
      </Suspense>
      <ActivityTile />
    </BentoGrid>
  )
}
