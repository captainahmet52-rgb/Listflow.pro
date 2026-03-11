import Sidebar from '@/components/dashboard/Sidebar'
import PageTransition from '@/components/ui/PageTransition'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#0a0a0f]">
      <Sidebar userEmail="ahmetkadir@listflow.pro" userName="Ahmet Kadir Atlı" />
      <main className="flex-1 lg:ml-[240px] min-h-screen overflow-auto">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  )
}
