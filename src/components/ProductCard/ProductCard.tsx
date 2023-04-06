import React, {FC} from 'react'
import styles from './ProductCard.module.scss'
import {IProduct} from '../../types/products'
import {BasketIcon} from '../svg'
import {useActions} from '../../hooks/useActions'
import noImage from '../../assets/img/no-image.jpg'
import {formatPrice} from '../../utils/functions'
import {useNavigate} from 'react-router-dom'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'
import ProductSize from '../ProductSize/ProductSize'

interface ProductCardProps {
  product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
  const navigate = useNavigate()

  const {addBasketItem} = useActions()

  return (
    <div className={styles.productCard}>
      <div>
        <img width={'100%'} src={product.url || noImage} alt={product.brand}/>
        <ProductSize sizeType={product.sizeType} size={product.size}/>
        <div className={styles.productCard__name}
             onClick={() => navigate(`${COSMETICS_HYGIENE_ROUTE}/${product.barcode}`)}>
          <span>{product.brand}</span> {product.name}
        </div>
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
        <div className={`button ${styles.buyBlock__button}`} onClick={() => addBasketItem(product)}>
          <span>В козину</span>
          <BasketIcon/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard