import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResidentsList from './components/residentsList.jsx'
import ResidentWithPayments from './components/residentWithPayments.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResidentsList />
      <ResidentWithPayments />
    </>
  )
}

export default App
