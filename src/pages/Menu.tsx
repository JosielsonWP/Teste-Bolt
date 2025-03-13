import { useState } from 'react'
import { Search, Plus, Filter, Coffee, Utensils } from 'lucide-react'

interface Categoria {
  id: string
  nome: string
  descricao: string
  icone: 'bebidas' | 'lanches'
  quantidadeItens: number
}

const CATEGORIAS: Categoria[] = [
  {
    id: '1',
    nome: 'Bebidas',
    descricao: 'Refrigerantes, sucos, cervejas e outras bebidas',
    icone: 'bebidas',
    quantidadeItens: 12
  },
  {
    id: '2',
    nome: 'Lanches',
    descricao: 'Hambúrgueres, sanduíches, porções e petiscos',
    icone: 'lanches',
    quantidadeItens: 8
  }
]

export function Menu() {
  const [termoBusca, setTermoBusca] = useState('')
  const [categorias] = useState<Categoria[]>(CATEGORIAS)

  const getIconByType = (tipo: 'bebidas' | 'lanches') => {
    const icons = {
      bebidas: Coffee,
      lanches: Utensils
    }
    return icons[tipo]
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categorias do Cardápio</h1>
        <button 
          className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
        >
          <Plus className="h-5 w-5" />
          Nova Categoria
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">Buscar</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              id="search"
              placeholder="Buscar categorias..."
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 pl-10 text-zinc-900 placeholder-zinc-500"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-zinc-700 hover:bg-zinc-50">
          <Filter className="h-5 w-5" />
          Filtrar
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categorias.map((categoria) => {
          const Icon = getIconByType(categoria.icone)
          
          return (
            <div 
              key={categoria.id} 
              className="rounded-lg bg-white p-6 shadow-sm hover:ring-2 hover:ring-zinc-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <Icon className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900">{categoria.nome}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{categoria.descricao}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="text-sm text-zinc-700">
                  {categoria.quantidadeItens} itens cadastrados
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
