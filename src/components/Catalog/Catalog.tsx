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
  selectedMinPrice: string
  setSelectedMinPrice: Dispatch<SetStateAction<string>>
  selectedMaxPrice: string
  setSelectedMaxPrice: Dispatch<SetStateAction<string>>
  setSelectedManufacturers: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedManufacturers: string[]
  fetchFilter: () => void
  clearFilters: () => void
}

const Catalog: FC<CatalogProps> = ({
                                     selectedType,
                                     setSelectedType,
                                     setSelectedMaxPrice,
                                     setSelectedMinPrice,
                                     selectedMinPrice,
                                     selectedMaxPrice,
                                     setSelectedManufacturers,
                                     fetchFilter,
                                     clearFilters,
                                     selectedManufacturers
                                   }) => {
  const {products} = useTypedSelector(state => state.products)

  return (
    <div className={styles.catalog}>
      <Filters selectedType={selectedType}
               setSelectedType={setSelectedType}
               selectedMinPrice={selectedMinPrice}
               setSelectedMinPrice={setSelectedMinPrice}
               selectedMaxPrice={selectedMaxPrice}
               setSelectedMaxPrice={setSelectedMaxPrice}
               setSelectedManufacturers={setSelectedManufacturers}
               fetchFilter={fetchFilter}
               clearFilters={clearFilters}
               selectedManufacturers={selectedManufacturers}
      />
      <div className={styles.catalog__content}>
        {
          products.length > 0
            ? <div className={styles.catalog__cards}>
            {
              products.map(product =>
                <ProductCard key={product.id} product={product}/>
              )
            }
          </div>
            : <div className={styles.catalog__notFound}>Извините, по вашему запросу ничего не найдено</div>
        }

        {products.length > 0 && <Pagination/>}
        <div className={styles.catalog__subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
          Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
          dignissim sed nulla ullamcorper enim, malesuada.
        </div>
      </div>
    </div>
  )
}

export default Catalog