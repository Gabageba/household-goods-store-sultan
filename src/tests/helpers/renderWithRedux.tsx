import {Provider} from 'react-redux'
import {render} from '@testing-library/react'
import {store} from '../../store/store'
import React, { ReactNode} from 'react'

export const renderWithRedux = (component: ReactNode) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  )
}