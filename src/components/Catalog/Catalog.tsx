import React, {Dispatch, FC, SetStateAction} from 'react'
import styles from './Catalog.module.scss'
import Filters from '../Filters/Filters'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import ProductCard from '../ProductCard/ProductCard'
import Pagination from '../Pagination/Pagination'
import {FilterTypes,} from '../../types/filter'

interface CatalogProps {
  selectedType: FilterTypes | null
  setSelectedType: (str: string) => void
  minPrice: string
  setMinPrice: Dispatch<SetStateAction<string>>
  maxPrice: string
  setMaxPrice: Dispatch<SetStateAction<string>>
  fetchFilter: () => void
}

const Catalog: FC<CatalogProps> = ({selectedType, setSelectedType, minPrice, setMinPrice, maxPrice, setMaxPrice, fetchFilter}) => {
  const {products} = useTypedSelector(state => state.products)

  return (
    <div className={styles.catalog}>
      <Filters selectedType={selectedType}
               setSelectedType={setSelectedType}
               minPrice={minPrice}
               setMinPrice={setMinPrice}
               maxPrice={maxPrice}
               setMaxPrice={setMaxPrice}
               fetchFilter={fetchFilter}
      />
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