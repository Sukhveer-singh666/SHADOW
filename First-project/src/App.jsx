import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
       
      </div>
      <h1 className="had">React Tutorial  Basic</h1>
      <ul>
      <h2><a href="#"> What is React?</a></h2>
      <h2><a href="#">Setting up the Environment</a></h2>
      <h2><a href="#">JSX Introduction</a></h2>
      <h2><a href="#">Components in React</a></h2>
      <h2><a href="#">Props and State</a></h2>
      <h2><a href="#">Handling Events</a></h2>
      <h2><a href="#">Conditional Rendering</a></h2>
      <h2><a href="#">Lists and Keys</a></h2>
      <h2><a href="#">React Hooks (useState, useEffect)</a></h2>
      <h2><a href="#">React Router Basics</a></h2>
      </ul>
      
      
    </>
  )
}

export default App
