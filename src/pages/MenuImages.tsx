import { useState } from 'react'
import { Search, Upload, X, Edit2, Trash2 } from 'lucide-react'

interface MenuItem {
  id: string
  nome: string
  imagem: string | null
  categoria: string
}

const MENU_ITEMS: MenuItem[] = [
  { id: '1', nome: 'Refrigerante 600ml', imagem: null, categoria: 'Bebidas' },
  { id: '2', nome: 'Refrigerante 1L', imagem: null, categoria: 'Bebidas' },
  { id: '3', nome: 'Suco de uva 2L', imagem: null, categoria: 'Bebidas' },
  { id: '4', nome: 'Sanduíche presunto/queijo', imagem: null, categoria: 'Lanches' },
  { id: '5', nome: 'Bacon', imagem: null, categoria: 'Lanches' },
  { id: '6', nome: 'Queijo', imagem: null, categoria: 'Lanches' },
]

export function MenuImages() {
  const [items, setItems] = useState<MenuItem[]>(MENU_ITEMS)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [draggedItem, setDraggedItem] = useState<string | null>(null)

  const categories = ['Todos', ...new Set(items.map(item => item.categoria))]

  const filteredItems = items.filter(item => {
    const matchesSearch = item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || item.categoria === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleImageUpload = (itemId: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setItems(prev => prev.map(item => 
        item.id === itemId ? { ...item, imagem: e.target?.result as string } : item
      ))
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    if (target.classList.contains('drop-zone')) {
      target.classList.add('border-violet-500', 'bg-violet-50')
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    if (target.classList.contains('drop-zone')) {
      target.classList.remove('border-violet-500', 'bg-violet-50')
    }
  }

  const handleDrop = (e: React.DragEvent, itemId: string) => {
    e.preventDefault()
    const target = e.target as HTMLElement
    if (target.classList.contains('drop-zone')) {
      target.classList.remove('border-violet-500', 'bg-violet-50')
    }
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(itemId, file)
    }
  }

  const handleRemoveImage = (itemId: string) => {
    setItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, imagem: null } : item
    ))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Imagens do Cardápio</h1>
        <p className="mt-2 text-zinc-600">
          Por aqui, é possível remover, alterar e editar as imagens dos seus itens
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">Buscar</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              id="search"
              placeholder="Pesquise pelo nome..."
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 pl-10 text-zinc-900 placeholder-zinc-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-4 h-10 text-zinc-900"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-medium text-zinc-900">{item.nome}</h3>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-900">
                {item.categoria}
              </span>
            </div>

            <div
              className={`
                drop-zone relative flex aspect-video items-center justify-center 
                rounded-lg border-2 border-dashed transition-all duration-200
                ${item.imagem ? 'border-transparent' : 'border-zinc-300'}
                ${draggedItem === item.id ? 'border-violet-500 bg-violet-50' : ''}
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, item.id)}
            >
              {item.imagem ? (
                <div className="group relative h-full w-full">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="h-full w-full rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-lg bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <label className="cursor-pointer rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handleImageUpload(item.id, file)
                        }}
                      />
                      <Edit2 className="h-5 w-5 text-white" />
                    </label>
                    <button
                      onClick={() => handleRemoveImage(item.id)}
                      className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
                    >
                      <Trash2 className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              ) : (
                <label className="flex cursor-pointer flex-col items-center gap-2 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleImageUpload(item.id, file)
                    }}
                  />
                  <div className="rounded-full bg-violet-100 p-3">
                    <Upload className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-violet-700">
                      Escolha a foto
                    </span>
                    <p className="text-xs text-zinc-500">
                      Clique aqui ou arraste a foto para cá
                    </p>
                  </div>
                </label>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
