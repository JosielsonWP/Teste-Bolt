import { Card } from '../components/Card'
import { 
  ShoppingBag, 
  DollarSign, 
  Users, 
  TrendingUp 
} from 'lucide-react'

export function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Painel de Controle</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card 
          title="Pedidos Hoje"
          value="127"
          icon={ShoppingBag}
          trend={12}
        />
        <Card 
          title="Receita Hoje"
          value="R$ 3.527,00"
          icon={DollarSign}
          trend={8}
        />
        <Card 
          title="Clientes Ativos"
          value="842"
          icon={Users}
          trend={3}
        />
        <Card 
          title="Taxa de Conversão"
          value="24,3%"
          icon={TrendingUp}
          trend={-2}
        />
      </div>
    </div>
  )
}
