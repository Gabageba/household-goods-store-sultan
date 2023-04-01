import React, {useEffect} from 'react'
import Header from './components/Header/Header'
import './sass/main.scss'
import AppRouter from './components/AppRouter'
import {useActions} from './hooks/useActions'

const App = () => {
  const {fetchBasketItems} = useActions()

  useEffect(() => {
    fetchBasketItems()
  }, [])

  return (
    <div>
      <Header/>
      <AppRouter/>
    </div>
  )
}

export default App