import React, {Dispatch, FC, SetStateAction} from 'react'
import styles from './MainInfo.module.scss'
import ProductSize from '../../../components/ProductSize/ProductSize'
import {formatPrice} from '../../../utils/functions'
import ProductCounter from '../../../components/ProductCounter/ProductCounter'
import {BasketIcon, DownloadSvg} from '../../../components/svg'
import share from '../../../assets/icons/share.svg'

interface MainInfoProps {
  brand: string
  name: string
  price: number
  setCounter: Dispatch<SetStateAction<number>>
  counter: number
  sizeType: string
  size: number
}

const MainInfo: FC<MainInfoProps> = ({counter, setCounter, price, brand, name, size, sizeType}) => {
  return (
    <>
      <div className={styles.stock}>В наличии</div>
      <div className={styles.title}>
        <span className={styles.title__brand}>{brand} </span>
        <span>{name}</span>
      </div>
      <ProductSize sizeType={sizeType} size={size}/>
      <div className={styles.buttons}>
        <div className={styles.buttons__price}>{formatPrice(price)} ₸</div>
        <ProductCounter add={() => setCounter(prevState => prevState + 1)}
                        decrease={() => setCounter(prevState => prevState - 1)} counter={counter}/>
        <div className={`button ${styles.buttons__inBasket}`}>
          <span>В корзину</span>
          <BasketIcon/>
        </div>
      </div>
      <div className={styles.links}>
        <div><img src={share} alt="share"/></div>
        <div><span>При покупке от <strong>10 000 ₸</strong> бесплатная доставка по Кокчетаву и области</span></div>
        <div className={styles.links__priceList}>
          <span>Прайс-лист</span>
          <DownloadSvg/>
        </div>
      </div>
    </>
  )
}

export default MainInfo