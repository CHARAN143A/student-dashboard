import { Sidebar } from '@/components/layout/Sidebar'
import { MobileNav } from '@/components/layout/MobileNav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-base">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-indigo/5 blur-[130px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-cyan/4 blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-violet/3 blur-[90px]" />
        </div>

        <div className="relative z-10 p-4 md:p-6 lg:p-8 pb-24 md:pb-8">
          {children}
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
