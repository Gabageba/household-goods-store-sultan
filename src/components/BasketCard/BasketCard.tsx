import React, {FC} from 'react'
import styles from './BasketCard.module.scss'
import {IProduct} from '../../types/products'
import {VolumeIcon, WeightIcon} from '../svg'
import deleteIcon from '../../assets/icons/delete.svg'
import {useActions} from '../../hooks/useActions'

interface BasketCardProps {
  product: IProduct
  amount: number
}

const BasketCard: FC<BasketCardProps> = ({product, amount}) => {
  const {deleteBasketItem, addBasketItem, decreaseBasketItemAmount} = useActions()
  return (
    <div className={styles.basketCard}>
      <img width={280} src={product.url} alt=""/>
      <div className={styles.info}>
        <div className={styles.info__size}>
          {product.sizeType === 'volume' ? <VolumeIcon/> : <WeightIcon/>}
          <span>{product.size}</span>
        </div>
        <h2>{product.name}</h2>
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
        <div className={styles.basketCard__price}>{product.price} ₸</div>
        <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
        <div className={styles.basketCard__delete} onClick={() => deleteBasketItem(product)}><img src={deleteIcon} alt="delete"/></div>
      </div>
    </div>
  )
}

export default BasketCard