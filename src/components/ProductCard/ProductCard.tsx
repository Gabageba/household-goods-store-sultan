import React, {FC} from 'react'
import styles from './ProductCard.module.scss'
import {IProduct} from '../../types/products'
import {BasketIcon, VolumeIcon, WeightIcon} from '../svg'
import Basket from '../../pages/Basket/Basket'

interface ProductCardProps {
  product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({product}) => {

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('ru-RU').format(price)
  }

  return (
    <div className={styles.productCard}>
      <div>
        <img width={'100%'} src={product.url} alt={product.brand}/>
        <div className={styles.productCard__size}>
          {product.sizeType === 'volume' ? <VolumeIcon/> : <WeightIcon/>}
          <span>{product.quantity ? `${product.quantity}X${product.size}` : product.size} {product.sizeType === 'volume' ? 'мл' : 'г'}</span>
        </div>
        <div className={styles.productCard__name}><span>{product.brand}</span> {product.name}</div>
        <div className={styles.subInfo}>
          <span className={styles.subInfo__title}>Штрихкод: </span>
          <span className={styles.subInfo__info}>{product.barcode}</span>
        </div>
        <div className={styles.subInfo}>
          <span className={styles.subInfo__title}>Производитель:</span>
          <span className={styles.subInfo__info}>{product.manufacturer}</span>
        </div>
        <div className={styles.subInfo}>
          <span className={styles.subInfo__title}>Бренд:</span>
          <span className={styles.subInfo__info}>{product.brand}</span>
        </div>
      </div>
      <div className={styles.buyBlock}>
        <span className={styles.buyBlock__price}>{formatPrice(product.price)} ₸</span>
        <div className={`button ${styles.buyBlock__button}`}>
          <span>В козину</span>
          <BasketIcon/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard