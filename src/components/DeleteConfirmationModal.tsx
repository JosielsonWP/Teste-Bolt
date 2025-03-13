import { X } from 'lucide-react'

interface DeleteConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  itemName: string
}

export function DeleteConfirmationModal({ isOpen, onClose, onConfirm, itemName }: DeleteConfirmationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl animate-slideIn">
        <div className="border-b border-zinc-200 bg-zinc-50/80 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">Excluir Categoria</h2>
            <button 
              onClick={onClose} 
              className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-zinc-700">
            Tem certeza que deseja excluir a categoria <strong>{itemName}</strong>? Esta ação não poderá ser desfeita.
          </p>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 active:bg-red-800"
            >
              Sim, excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
