import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './components/Image'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <Image />
      <Main />
    </div>
  )
}

export default App
