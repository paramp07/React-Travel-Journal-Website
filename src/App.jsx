import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Place from './components/Place'
import Nav from './components/Nav'
import Image from './components/Image'
import Data from './data'

function App() {
  const [count, setCount] = useState(0)
  const locations = Data.map(location => {
    return (
      <>
        <Place
          {...location}
        />
        <hr></hr>
      </>
    )
  })

  return (
    <div>
      <Nav />
      <div className="travel-list">
        

        {locations}
        
      </div>
    </div>
  )
}

export default App
