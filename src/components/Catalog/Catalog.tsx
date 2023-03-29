import React from 'react'
import styles from './Catalog.module.scss'
import Filters from '../Filters/Filters'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'

const Catalog = () => {
  const {products} = useTypedSelector(state => state.products)

  return (
    <div className={styles.catalog}>
      <Filters/>
      <div className={styles.catalog__content}>
        <div className={styles.catalog__cards}>
          {
            products.map(product =>
              <ProductCard key={product.id} product={product}/>
            )
          }
        </div>
        <Pagination/>
        <div className={styles.catalog__subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</div>
      </div>
    </div>
  )
}

export default Catalog