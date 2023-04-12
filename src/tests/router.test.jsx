import App from '../App'
import { screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {act} from 'react-dom/test-utils'
import axios from 'axios'
import {renderTestApp} from './helpers/renderTestApp'

jest.mock('axios')

describe('router test', () => {

  beforeEach(() => {
    const response = {
      data: [
        {
          'id': 1,
          'url': 'products/img/LOCCITANE-shea-butter.jpg',
          'name': 'Крем для рук L\'OCCITANE shea butter',
          'sizeType': 'volume',
          'size': 150,
          'barcode': '13290100050',
          'manufacturer': 'L\'Occitane en Provence',
          'brand': 'L\'OCCITANE',
          'description': 'Крем для рук отлично смягчает кожу рук, благодаря 20%-ному содержанию масла карите, меду и экстракту сладкого миндаля. Экстракты жасмина и иланг-иланга придают коже изысканный легкий аромат. Крем Карите для рук отлично впитывается, заживляет и защищает сухую/обезвоженную кожу. Антиоксидант витамин Е способствует питанию кожи рук.',
          'price': 2439,
          'careType': [
            'Уход за телом, Уход за руками'
          ]
        }
      ]
    }
    axios.get.mockReturnValue(response)
  })

  afterEach(() => jest.clearAllMocks())

  test('basket route test', async () => {
    await act(async () => renderTestApp(<App/>))

    const basketLink = screen.getByTestId('basket-link')
    userEvent.click(basketLink)
    expect(screen.getByTestId('basket-page')).toBeInTheDocument()
  })

  test('cosmetics-hygiene route test', async () => {
    await act(async () => renderTestApp(<App/>))

    const basketLink = screen.getByTestId('cosmetics-hygiene-link')
    userEvent.click(basketLink)
    expect(screen.getByTestId('cosmetics-hygiene-page')).toBeInTheDocument()
  })

  test('error route test', async () => {
    await act(async () => renderTestApp(<App/>, '/123213312'))
    expect(screen.getByTestId('cosmetics-hygiene-page')).toBeInTheDocument()
  })


})
