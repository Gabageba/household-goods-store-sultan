import React, {FC} from 'react'
import styles from './BasketCard.module.scss'
import {IProduct} from '../../types/products'
import {VolumeIcon, WeightIcon} from '../svg'
import deleteIcon from '../../assets/icons/delete.svg'
import noImage from '../../assets/img/no-image.jpg'
import {useActions} from '../../hooks/useActions'
import {formatPrice} from '../../utils/functions'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'
import {useNavigate} from 'react-router-dom'

interface BasketCardProps {
  product: IProduct
  amount: number
}

const BasketCard: FC<BasketCardProps> = ({product, amount}) => {
  const {deleteBasketItem, addBasketItem, decreaseBasketItemAmount} = useActions()
  const navigate = useNavigate()

  return (
    <div className={styles.basketCard}>
      <img width={280} src={product.url || noImage} alt={product.brand}/>
      <div className={styles.info}>
        <div className={styles.info__size}>
          {product.sizeType === 'volume' ? <VolumeIcon/> : <WeightIcon/>}
          <span>{product.size}</span>
        </div>
        <h2 onClick={() => navigate(`${COSMETICS_HYGIENE_ROUTE}/${product.barcode}`)}>{product.name}</h2>
        <div className={styles.info__description}>{product.description}</div>
      </div>
      <div className={styles.basketCard__buttons}>
        <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
        <div className={styles.amount}>
          <div className={styles.amount__button} onClick={() => decreaseBasketItemAmount(product)}>-</div>
          <div>{amount}</div>
          <div className={styles.amount__button} onClick={() => addBasketItem(product)}>+</div>
        </div>
        <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
        <div className={styles.basketCard__price}>{formatPrice(product.price)} ₸</div>
        <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
        <div className={styles.basketCard__delete} onClick={() => deleteBasketItem(product)}><img src={deleteIcon} alt="delete"/></div>
      </div>
    </div>
  )
}

export default BasketCard