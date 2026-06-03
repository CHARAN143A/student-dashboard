import { CoursesSkeleton } from '@/components/ui/Skeletons'

function SkeletonBox({ className = '' }: { className?: string }) {
  return <div className={`skeleton rounded-xl ${className}`} />
}

export default function DashboardLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-auto gap-4">
      <div className="lg:col-span-8 col-span-full">
        <div className="rounded-2xl bg-bg-surface border border-border-subtle p-8 min-h-[200px] space-y-4">
          <SkeletonBox className="h-3 w-32" />
          <SkeletonBox className="h-9 w-64" />
          <SkeletonBox className="h-4 w-80" />
          <div className="flex gap-3 pt-2">
            {[0, 1, 2].map((i) => <SkeletonBox key={i} className="h-14 w-24 rounded-xl" />)}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-full">
        <div className="rounded-2xl bg-bg-surface border border-border-subtle p-5 min-h-[200px]">
          <div className="grid grid-cols-2 gap-3 h-full">
            {[0, 1, 2, 3].map((i) => <SkeletonBox key={i} className="h-24 rounded-xl" />)}
          </div>
        </div>
      </div>
      <CoursesSkeleton />
      <div className="lg:col-span-6 col-span-full">
        <div className="rounded-2xl bg-bg-surface border border-border-subtle p-6 min-h-[220px] space-y-4">
          <SkeletonBox className="h-5 w-40" />
          <div className="flex gap-1">
            {Array.from({ length: 17 }).map((_, w) => (
              <div key={w} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, d) => (
                  <SkeletonBox key={d} className="w-3 h-3 rounded-sm" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-full">
        <div className="rounded-2xl bg-bg-surface border border-border-subtle p-5 min-h-[220px] space-y-3">
          <SkeletonBox className="h-5 w-32" />
          {[0, 1, 2, 3].map((i) => <SkeletonBox key={i} className="h-11 w-full rounded-xl" />)}
        </div>
      </div>
    </div>
  )
}
