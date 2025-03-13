import { X, Coffee, Utensils } from 'lucide-react'
import { useState } from 'react'

interface NewCategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (category: { nome: string; descricao: string; icone: 'bebidas' | 'lanches' }) => void
}

export function NewCategoryModal({ isOpen, onClose, onSave }: NewCategoryModalProps) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [icone, setIcone] = useState<'bebidas' | 'lanches'>('bebidas')
  const [touched, setTouched] = useState({ nome: false, descricao: false })

  if (!isOpen) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({ nome, descricao, icone })
    setNome('')
    setDescricao('')
    setIcone('bebidas')
    setTouched({ nome: false, descricao: false })
    onClose()
  }

  const isFormValid = nome.trim() !== '' && descricao.trim() !== ''

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl animate-slideIn">
        <div className="border-b border-zinc-200 bg-zinc-50/80 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">Nova Categoria</h2>
            <button 
              onClick={onClose} 
              className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            <div className="relative">
              <label 
                htmlFor="nome" 
                className="mb-2 block text-sm font-medium text-zinc-900"
              >
                Nome da categoria
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, nome: true }))}
                className={`
                  block w-full rounded-lg border h-10 px-4 text-sm text-zinc-900 
                  shadow-sm outline-none transition-all duration-200 
                  placeholder:text-zinc-400
                  ${touched.nome && !nome.trim() 
                    ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                    : 'border-zinc-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10'
                  }
                `}
                placeholder="Digite o nome da categoria"
                required
              />
              {touched.nome && !nome.trim() && (
                <p className="mt-1 text-sm text-red-500 animate-slideDown">
                  O nome da categoria é obrigatório
                </p>
              )}
            </div>

            <div className="relative">
              <label 
                htmlFor="descricao" 
                className="mb-2 block text-sm font-medium text-zinc-900"
              >
                Descrição
              </label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                onBlur={() => setTouched(prev => ({ ...prev, descricao: true }))}
                className={`
                  block h-24 w-full rounded-lg border px-4 py-3 text-sm 
                  text-zinc-900 shadow-sm outline-none transition-all duration-200 
                  placeholder:text-zinc-400 resize-none
                  ${touched.descricao && !descricao.trim() 
                    ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                    : 'border-zinc-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10'
                  }
                `}
                placeholder="Descreva brevemente a categoria"
                required
              />
              {touched.descricao && !descricao.trim() && (
                <p className="mt-1 text-sm text-red-500 animate-slideDown">
                  A descrição é obrigatória
                </p>
              )}
            </div>

            <div>
              <span className="mb-3 block text-sm font-medium text-zinc-900">
                Selecione o tipo da categoria
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIcone('bebidas')}
                  className={`
                    relative flex items-center gap-3 rounded-lg border p-4
                    transition-all duration-200 hover:border-violet-500 hover:bg-violet-50
                    ${icone === 'bebidas' 
                      ? 'border-violet-500 bg-violet-50 ring-4 ring-violet-500/10' 
                      : 'border-zinc-200'
                    }
                  `}
                >
                  <div className={`
                    flex h-10 w-10 items-center justify-center rounded-full
                    ${icone === 'bebidas' ? 'bg-violet-500' : 'bg-zinc-100'}
                  `}>
                    <Coffee className={`h-5 w-5 ${
                      icone === 'bebidas' ? 'text-white' : 'text-zinc-500'
                    }`} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className={`text-sm font-medium ${
                      icone === 'bebidas' ? 'text-violet-900' : 'text-zinc-900'
                    }`}>
                      Bebidas
                    </span>
                    <span className="text-xs text-zinc-500">
                      Cafés, sucos, refrigerantes
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIcone('lanches')}
                  className={`
                    relative flex items-center gap-3 rounded-lg border p-4
                    transition-all duration-200 hover:border-violet-500 hover:bg-violet-50
                    ${icone === 'lanches' 
                      ? 'border-violet-500 bg-violet-50 ring-4 ring-violet-500/10' 
                      : 'border-zinc-200'
                    }
                  `}
                >
                  <div className={`
                    flex h-10 w-10 items-center justify-center rounded-full
                    ${icone === 'lanches' ? 'bg-violet-500' : 'bg-zinc-100'}
                  `}>
                    <Utensils className={`h-5 w-5 ${
                      icone === 'lanches' ? 'text-white' : 'text-zinc-500'
                    }`} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className={`text-sm font-medium ${
                      icone === 'lanches' ? 'text-violet-900' : 'text-zinc-900'
                    }`}>
                      Lanches
                    </span>
                    <span className="text-xs text-zinc-500">
                      Salgados, sanduíches, doces
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`
                rounded-lg px-4 py-2.5 text-sm font-semibold text-white 
                shadow-sm transition-all duration-200
                ${isFormValid 
                  ? 'bg-violet-600 hover:bg-violet-700 active:bg-violet-800' 
                  : 'cursor-not-allowed bg-zinc-300'
                }
              `}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
