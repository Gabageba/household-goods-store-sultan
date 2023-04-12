import {productsReducer, setProducts, setProductsIsLoading} from '../store/reducers/productsReducer'

describe('product reducer', () => {
  test('setProductsIsLoading', () => {
    expect(productsReducer({
      products: [],
      productsType: [],
      page: 1,
      limit: 9,
      isLoading: false,
      totalCount: 0
    }, setProductsIsLoading(true))).toEqual({
      products: [],
      productsType: [],
      page: 1,
      limit: 9,
      isLoading: true,
      totalCount: 0
    })
  })

  test('setProducts', () => {
    const product =  {
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
      }
    expect(productsReducer({
      products: [],
      productsType: [],
      page: 1,
      limit: 9,
      isLoading: false,
      totalCount: 0
    }, setProducts([product]))).toEqual({
      products: [product],
      productsType: [],
      page: 1,
      limit: 9,
      isLoading: false,
      totalCount: 0
    })
  })
})