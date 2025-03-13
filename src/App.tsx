import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Router } from './Router'

export function App() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-app">
      <Sidebar />
      
      <div className="relative">
        <Header />
        
        <main className="px-4 pb-12 pt-24 lg:px-8 lg:pt-24">
          <Router />
        </main>
      </div>
    </div>
  )
}

export default App
