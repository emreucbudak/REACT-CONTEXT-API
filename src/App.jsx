import { useState } from 'react'
import Auth from './context/auth'
import './App.css'
import Authentication from './Authentication'
function App() {
  const [auth, setAuth] = useState(false)
  const loginAuth = () => {
    setAuth(true)

  }

  return (
    <Auth.Provider value={{status:auth , login:loginAuth}}>
      <Authentication/>
      
    </Auth.Provider>
  )
}

export default App
