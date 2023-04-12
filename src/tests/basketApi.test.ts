import {getBasketItems} from '../api/basketApi'
import {IProduct} from '../types/products'

describe('basket api test', () => {
  let response = {}

  test('no data', async () => {
    Storage.prototype.getItem = jest.fn(() => '')

    const data = await getBasketItems()
    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(data).toEqual([])
  })

  test('get empty basket items', async () => {
    Storage.prototype.getItem = jest.fn(() => '[]')

    const data = await getBasketItems()
    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(data).toEqual([])
  })


  test('get fill basket items', async () => {
    const items: IProduct[] = [
      {
        "id": 0,
        "url": "products/img/AHAVA-DERMUD-Deadsea-Mud.jpg",
        "name": "Грязь натуральная Мертвого Моря  AHAVA DERMUD Deadsea Mud",
        "sizeType": "weight",
        "size": 400,
        "barcode": "90010800004",
        "manufacturer": "Ahava Dead Sea Laboratories",
        "brand": "AHAVA",
        "description": "Грязь натуральная Мертвого Моря Ahava Dermud Deadsea Mud – продукт от израильского бренда  Ahava, обладающий, кроме ярко выраженного эстетического, реальным лечебным эффектом для организма в целом и для кожи, в частности. Черная минеральная грязь натуральная Мертвого Моря – уникальный косметический сорбент. Она удивительно нежно и легко удаляет излишки кожного жира, ороговевшие клетки эпидермиса, различные токсины и другие загрязнения. В результате кожа становится мягче, свежее, выглядит моложе, значительно повышается её упругость. Дополнительным, крайне неординарным достоинством Dermud Deadsea Mud является возможность лечебного применения. Так эту грязь возможно использовать для минимизации болевого синдрома в мышцах, связках и суставах.",
        "price": 1079,
        "careType": [
          "Уход за телом"
        ]
      },
      {
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
    ]

    Storage.prototype.getItem = jest.fn(() => JSON.stringify(items))

    const data = await getBasketItems()
    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(data).toEqual(items)
  })
})