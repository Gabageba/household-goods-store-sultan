import {MemoryRouter} from 'react-router-dom'
import {render} from '@testing-library/react'
import {ReactNode} from 'react'
import AppRouter from '../../components/AppRouter'

export const renderWithRouter = (component: ReactNode, initialRoute = '/') => {
  return render (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  )
}