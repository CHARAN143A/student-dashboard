'use client'

function SkeletonBox({ className = '' }: { className?: string }) {
  return <div className={`skeleton rounded-xl ${className}`} />
}

export function CourseCardSkeleton() {
  return (
    <div className="lg:col-span-3 md:col-span-1 col-span-full">
      <div className="rounded-2xl bg-bg-surface border border-border-subtle p-5 min-h-[200px] flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <SkeletonBox className="w-10 h-10 rounded-xl" />
        </div>
        <div className="flex-1 space-y-2">
          <SkeletonBox className="h-4 w-4/5" />
          <SkeletonBox className="h-3 w-3/5" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <SkeletonBox className="h-2 w-14" />
            <SkeletonBox className="h-2 w-8" />
          </div>
          <SkeletonBox className="h-1.5 w-full rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function CoursesSkeleton() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </>
  )
}
