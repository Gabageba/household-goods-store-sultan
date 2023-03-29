import React from 'react'
import styles from './Catalog.module.scss'
import Filters from '../Filters/Filters'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import ProductCard from '../ProductCard/ProductCard'

const Catalog = () => {
  const {products} = useTypedSelector(state => state.products)

  return (
    <div className={styles.catalog}>
      <Filters />
      <div>
        {
          products.map(product =>
            <ProductCard key={product.id} />
          )
        }
      </div>
    </div>
  )
}

export default Catalog