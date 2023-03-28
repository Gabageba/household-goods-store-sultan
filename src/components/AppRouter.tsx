import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from '../routes/routes'
import CosmeticsHygiene from '../pages/CosmeticsHygiene/CosmeticsHygiene'

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({path, Element}) =>
        <Route key={path} path={path} element={<Element/>}/>
      )}
      <Route path="*" element={<CosmeticsHygiene/>}/>
    </Routes>
  )
}

export default AppRouter