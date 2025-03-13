import { useSidebarStore } from '@/stores/sidebar'

export function Sidebar() {
  const { isOpen } = useSidebarStore()

  return (
    <aside className={`
      fixed left-0 top-0 bottom-0 z-40 w-80 bg-white border-r border-zinc-200 
      transition-transform duration-150
      ${isOpen ? 'translate-x-0' : '-translate-x-80'}
      lg:translate-x-0
    `}>
      <div className="flex h-16 items-center gap-3 border-b border-zinc-200 px-6">
        <strong>Pizza Shop</strong>
      </div>

      <nav className="space-y-0.5 p-6">
        {/* Aqui você pode adicionar seus links de navegação */}
      </nav>
    </aside>
  )
}
