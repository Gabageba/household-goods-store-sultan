import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import styles from './AddCard.module.scss'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import {COSMETICS_HYGIENE_TYPES} from '../../utils/consts'
import PopUpBlock from '../PopUpBlock/PopUpBlock'
import {useActions} from '../../hooks/useActions'
import {IProduct} from '../../types/products'

interface AddCardProps {
  product?: IProduct
  setIsEdit?: Dispatch<SetStateAction<boolean>>
}

const AddCard: FC<AddCardProps> = ({product, setIsEdit}) => {
  const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false)
  const [url, setUrl] = useState<string>(product?.url || '')
  const [name, setName] = useState<string>(product?.name || '')
  const [sizeType, setSizeType] = useState<string>(product?.sizeType || 'value')
  const [size, setSize] = useState<number>(product?.size || 0)
  const [barcode, setBarcode] = useState<string>(product?.barcode || '')
  const [manufacturer, setManufacturer] = useState<string>(product?.manufacturer || '')
  const [brand, setBrand] = useState<string>(product?.brand || '')
  const [price, setPrice] = useState<number>(product?.price || 0)
  const [careType, setCareType] = useState<string[]>(product?.careType || [])
  const [description, setDescription] = useState<string>(product?.description || '')
  const {addProduct, editProduct} = useActions()

  const selectCareType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCareType(prevState => {
        return [...prevState, e.target.value]
      })
    } else {
      setCareType(prevState => {
        const index = prevState.indexOf(e.target.value)
        prevState.splice(index, 1)
        return [...prevState]
      })
    }
  }

  const clear = () => {
    setUrl('')
    setName('')
    setSizeType('')
    setSize(0)
    setBarcode('')
    setManufacturer('')
    setBrand('')
    setPrice(0)
    setCareType([])
    setDescription('')
  }

  const addCardHandler = () => {
    if (!url || !name || !sizeType || !size || !barcode || !manufacturer || !brand || !price || careType.length === 0 || !description) {
      setIsErrorVisible(true)
      return
    }
    addProduct(url, name, sizeType, size, manufacturer, barcode, brand, price, careType, description)
    clear()
  }

  const saveEditCardHandler = () => {
    if (!url || !name || !sizeType || !size || !barcode || !manufacturer || !brand || !price || careType.length === 0 || !description) {
      setIsErrorVisible(true)
    }
    editProduct(product!.id, url, name, sizeType, size, manufacturer, barcode, brand, price, careType, description)
    if (setIsEdit) {
      setIsEdit(false)
    }

  }

  return (
    <div className={styles.addCard}>
      <PopUpBlock text={'Заполните все поля'} isVisible={isErrorVisible} setIsVisible={setIsErrorVisible}/>
      <div className={styles.addCard__item} style={{gridArea: 'url'}}>
        <div>URL картинки:</div>
        <input className={styles.addCard__input} type="text" placeholder={'Введите URL картинки'}
               value={url}
               onChange={e => setUrl(e.target.value)}/>
      </div>
      <div className={styles.addCard__item} style={{gridArea: 'name'}}>
        <div>Название товара:</div>
        <input className={styles.addCard__input} type="text" placeholder={'Введите название товара'}
               value={name}
               onChange={e => setName(e.target.value)}/>
      </div>
      <div className={styles.addCard__item} style={{gridArea: 'sizeType'}}>
        <div>Тип размера:</div>
        <select className={styles.addCard__input} onChange={e => setSizeType(e.target.value)}>
          <option value={'value'}>Объем</option>
          <option value={'weight'}>Вес</option>
        </select>
      </div>
      <div className={styles.addCard__item} style={{gridArea: 'size'}}>
        <div>Размер:</div>
        <input className={styles.addCard__input} type="number" placeholder={'Введите размер'}
               value={size}
               onChange={e => setSize(Number(e.target.value))}/>
      </div>
      <div className={styles.addCard__item} style={{gridArea: 'barcode'}}>
        <div>Штрихкод:</div>
        <input className={styles.addCard__input} type="text" placeholder={'Введите штрихкод'}
               value={barcode}
               onChange={e => setBarcode(e.target.value)}/>
      </div>
      <div className={styles.addCard__item} style={{gridArea: 'manufacturer'}}>
        <div>Производитель:</div>
        <input className={styles.addCard__input} type="text" placeholder={'Введите производителя'}
               value={manufacturer}
               onChange={e => setManufacturer(e.target.value)}/>
      </div>
      <div className={styles.addCard__item} style={{gridArea: 'brand'}}>
        <div>Бренд:</div>
        <input className={styles.addCard__input} type="text" placeholder={'Введите бренд'}
               value={brand}
               onChange={e => setBrand(e.target.value)}/>
      </div>
      <div className={styles.addCard__item} style={{gridArea: 'price'}}>
        <div>Цена:</div>
        <input className={styles.addCard__input} type="number" placeholder={'Введите цена'}
               value={price}
               onChange={e => setPrice(Number(e.target.value))}/>
      </div>
      <div className={`${styles.addCard__item} ${styles.addCard__checkboxItem}`}>
        <div>Тип ухода:</div>
        <div className={styles.addCard__checkbox}>
          {COSMETICS_HYGIENE_TYPES.map(type =>
            <CustomCheckbox key={type.id} name={type.name} selected={careType} setSelected={selectCareType}/>
          )}
        </div>
      </div>
      <div className={`${styles.addCard__item} ${styles.addCard__textarea}`}>
        <div>Описание:</div>
        <textarea className={styles.addCard__input} placeholder={'Введите описание'}
                  value={description}
                  onChange={e => setDescription(e.target.value)}/>
      </div>
      <div className={`button ${styles.addCard__button}`} onClick={product ? saveEditCardHandler : addCardHandler}>Сохранить</div>
    </div>
  )
}

export default AddCard