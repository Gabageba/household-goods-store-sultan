import React, {useEffect} from 'react'
import Header from './components/Header/Header'
import './sass/main.scss'
import AppRouter from './components/AppRouter'
import {useActions} from './hooks/useActions'
import {Link} from 'react-router-dom'

const App = () => {
  const {fetchBasketItems} = useActions()

  useEffect(() => {
    fetchBasketItems()
  }, [])

  return (
    <div>
      <Header/>
      <AppRouter/>
      <Link to={'/admin'} className={'adminButton button'}>Админ панель</Link>
    </div>
  )
}

export default App