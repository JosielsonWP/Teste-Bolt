import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface EstadoSidebar {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

export const useSidebarStore = create<EstadoSidebar>()(
  persist(
    (set) => ({
      isOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      close: () => set({ isOpen: false }),
    }),
    {
      name: 'estado-sidebar',
    }
  )
)
