import React from 'react'
import Header from './components/Header/Header'
import './sass/main.scss'
import AppRouter from './components/AppRouter'

const App = () => {
  return (
    <div>
      <Header/>
      <AppRouter/>
    </div>
  )
}

export default App