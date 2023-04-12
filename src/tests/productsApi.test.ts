import {getBasketItems} from '../api/basketApi'
import {IProduct} from '../types/products'
import axios from 'axios'
import {getProducts} from '../api/productsApi'
import {screen} from '@testing-library/react'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const res = [
  {
    id: 0,
    url: 'products/img/AHAVA-DERMUD-Deadsea-Mud.jpg',
    name: 'Грязь натуральная Мертвого Моря  AHAVA DERMUD Deadsea Mud',
    sizeType: 'weight',
    size: 400,
    barcode: '90010800004',
    manufacturer: 'Ahava Dead Sea Laboratories',
    brand: 'AHAVA',
    description: 'Грязь натуральная Мертвого Моря Ahava Dermud Deadsea Mud – продукт от израильского бренда  Ahava, обладающий, кроме ярко выраженного эстетического, реальным лечебным эффектом для организма в целом и для кожи, в частности. Черная минеральная грязь натуральная Мертвого Моря – уникальный косметический сорбент. Она удивительно нежно и легко удаляет излишки кожного жира, ороговевшие клетки эпидермиса, различные токсины и другие загрязнения. В результате кожа становится мягче, свежее, выглядит моложе, значительно повышается её упругость. Дополнительным, крайне неординарным достоинством Dermud Deadsea Mud является возможность лечебного применения. Так эту грязь возможно использовать для минимизации болевого синдрома в мышцах, связках и суставах.',
    price: 1079,
    careType: [
      'Уход за телом'
    ]
  }
]
describe('products api test', () => {

  test('data in localStorage', async () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(res))
    const data = await getProducts()
    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(axios.get).toBeCalledTimes(0)
    expect(data).toEqual(res)
  })

  test('no data in localStorage', async () => {
    Storage.prototype.getItem = jest.fn(() => null)
    mockedAxios.get.mockResolvedValue({ data: res });

    const data = await getProducts()
    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(axios.get).toBeCalledTimes(1)
    expect(data).toEqual(res)
  })

})