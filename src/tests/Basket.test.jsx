import {renderTestApp} from './helpers/renderTestApp'
import Basket from '../pages/Basket/Basket'
import {screen} from '@testing-library/react'
import * as hook from '../hooks/useTypedSelector'
import userEvent from '@testing-library/user-event'

const items = [
  {
    product:  {
      "id": 1,
      "url": "products/img/LOCCITANE-shea-butter.jpg",
      "name": "Крем для рук L'OCCITANE shea butter",
      "sizeType": "volume",
      "size": 150,
      "barcode": "13290100050",
      "manufacturer": "L'Occitane en Provence",
      "brand": "L'OCCITANE",
      "description": "Крем для рук отлично смягчает кожу рук, благодаря 20%-ному содержанию масла карите, меду и экстракту сладкого миндаля. Экстракты жасмина и иланг-иланга придают коже изысканный легкий аромат. Крем Карите для рук отлично впитывается, заживляет и защищает сухую/обезвоженную кожу. Антиоксидант витамин Е способствует питанию кожи рук.",
      "price": 2439,
      "careType": [
        "Уход за телом, Уход за руками"
      ]
    },
    amount: 1
  }
]


describe('Basket Test', () => {
  test('show pop up',  () => {
    jest.spyOn(hook, 'useTypedSelector').mockReturnValue({
      basketItems: items,
      totalCount: 1
    })

    renderTestApp(<Basket/>)
    expect(screen.queryByTestId('order-modal-window')).toBeNull()
    const purchaseButton = screen.getByTestId('purchase-button')

    userEvent.click(purchaseButton)
     expect(screen.getByTestId('order-modal-window')).toBeInTheDocument()
  })

  test('basket empty',  () => {
    jest.spyOn(hook, 'useTypedSelector').mockReturnValue({
      basketItems: [],
      totalCount: 0
    })

    renderTestApp(<Basket/>)

    expect(screen.getByTestId('basket empty')).toBeInTheDocument()
  })
})