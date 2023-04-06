import React, {FC} from 'react'
import styles from './BasketCard.module.scss'
import {IProduct} from '../../types/products'
import deleteIcon from '../../assets/icons/delete.svg'
import noImage from '../../assets/img/no-image.jpg'
import {useActions} from '../../hooks/useActions'
import {formatPrice} from '../../utils/functions'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'
import {useNavigate} from 'react-router-dom'
import ProductSize from '../ProductSize/ProductSize'
import ProductCounter from '../ProductCounter/ProductCounter'

interface BasketCardProps {
  product: IProduct
  amount: number
}

const BasketCard: FC<BasketCardProps> = ({product, amount}) => {
  const {deleteBasketItem, addBasketItem, decreaseBasketItemAmount} = useActions()
  const navigate = useNavigate()

  return (
    <div className={styles.basketCard}>
      <div className={styles.basketCard__info}>
        <img width={280} src={product.url || noImage} alt={product.brand}/>
        <div className={styles.info}>
          <ProductSize sizeType={product.sizeType} size={product.size}/>
          <h2 onClick={() => navigate(`${COSMETICS_HYGIENE_ROUTE}/${product.barcode}`)}>{product.name}</h2>
          <div className={styles.info__description}>{product.description}</div>
        </div>
      </div>
      <div className={styles.basketCard__buttons}>
        <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
        <ProductCounter add={() => addBasketItem(product)}
                        decrease={() => decreaseBasketItemAmount(product)}
                        counter={amount}/>
        <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
        <div className={styles.basketCard__price}>{formatPrice(product.price)} ₸</div>
        <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
        <div className={styles.basketCard__delete} onClick={() => deleteBasketItem(product.id)}>
          <img src={deleteIcon} alt="delete"/>
        </div>
      </div>
    </div>
  )
}

export default BasketCard