import { useState } from 'react'
import { Menu, MessageSquare, BookOpen, MessageCircleReply, Users } from 'lucide-react'
import AdminSidebar from '../components/admin/AdminSidebar'
import StatCard from '../components/admin/StatCard'
import ActivityList from '../components/admin/ActivityList'

const stats = [
  { id: 1, icon: MessageSquare,       value: '4',     label: 'Total Pesan Masuk' },
  { id: 2, icon: BookOpen,            value: '2',     label: 'Pesan Belum Dibaca' },
  { id: 3, icon: MessageCircleReply,  value: '1',     label: 'Pesan Sudah Dibalas' },
  { id: 4, icon: Users,              value: '1,247', label: 'Pengunjung Bulan Ini' },
]

export default function AdminPage() {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#f5f7f8] font-sans overflow-hidden">
      {/* ── Sidebar ── */}
      <AdminSidebar
        activeMenu={activeMenu}
        onMenuClick={(id) => { setActiveMenu(id); setSidebarOpen(false) }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl hover:bg-gray-50 transition-colors text-gray-600"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#22c55e] rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white text-[10px] font-bold">G</span>
            </div>
            <span className="font-bold text-[#111827] text-sm">Green Banking</span>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-6 py-8 lg:px-10 lg:py-10">

          {/* ── Page Header ── */}
          <div className="mb-8">
            <h3 className="text-[22px] lg:text-[26px] font-bold text-[#111827] leading-tight tracking-tight">
              Dashboard
            </h3>
            <p className="text-[#6b7280] text-[15px] mt-1 font-normal">
              Ringkasan aktivitas website
            </p>
          </div>

          {/* ── Stat Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.id}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

          {/* ── Recent Activity ── */}
          <ActivityList />

        </main>
      </div>
    </div>
  )
}
