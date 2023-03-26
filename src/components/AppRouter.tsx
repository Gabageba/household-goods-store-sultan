import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from '../routes/routes'
import Catalog from '../pages/Catalog/Catalog'

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({path, Element}) =>
        <Route key={path} path={path} element={<Element/>}/>
      )}
      <Route path="*" element={<Catalog/>}/>
    </Routes>
  )
}

export default AppRouter