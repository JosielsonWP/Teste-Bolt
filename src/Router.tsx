import { Routes, Route } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Menu } from './pages/Menu'
import { Orders } from './pages/Orders'
import { Customers } from './pages/Customers'
import { Reports } from './pages/Reports'
import { Settings } from './pages/Settings'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
