import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import {store} from '../../store/store'
import { ReactNode} from 'react'

export const renderTestApp = (component: ReactNode, route?: string  ) => {

  return render (
    <Provider store={store}>
      <MemoryRouter initialEntries={route ? [route] : undefined}>
        {component}
      </MemoryRouter>
    </Provider>
  )
}