import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { useSidebarStore } from '@/stores/sidebar'

export function Header() {
  const { isOpen, toggle } = useSidebarStore()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-zinc-200 bg-white lg:left-80">
      <div className="flex h-full items-center gap-4 px-6">
        <Button
          onClick={toggle}
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  )
}
