import { ElementType } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface CardProps {
  title: string
  value: string
  icon: ElementType
  trend: number
}

export function Card({ title, value, icon: Icon, trend }: CardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-700">{title}</span>
        <Icon className="h-5 w-5 text-zinc-500" />
      </div>
      <div className="mt-2 flex items-baseline gap-4">
        <span className="text-2xl font-semibold">{value}</span>
        <span className={`flex items-center gap-1 text-sm ${trend >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
          {trend >= 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          {Math.abs(trend)}%
        </span>
      </div>
    </div>
  )
}
