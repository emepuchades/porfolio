import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  const [ theme, setTheme ] = useState("light");
  
  useEffect(() => {

  }, [theme])

  return (
    <div className="App">
        <Dashboard />
    </div>
  )
}

export default App
