import React, {useEffect, useState} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import {COSMETICS_HYGIENE_ROUTE, COSMETICS_HYGIENE_TYPES} from '../../utils/consts'
import {IPaths} from '../../types/path'
import Sort from '../../components/Sort/Sort'
import styles from './CosmeticsHygiene.module.scss'
import TypeFilter from '../../components/TypeFilter/TypeFilter'
import Catalog from '../../components/Catalog/Catalog'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import Footer from '../../components/Footer/Footer'
import {FilterTypes, IManufacturer} from '../../types/filter'

const CosmeticsHygiene = () => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<FilterTypes | null>(null)
  const [minPrice, setMinPrice] = useState<string>('')
  const [maxPrice, setMaxPrice] = useState<string>('')
  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([])
  const {fetchProducts} = useActions()
  const {page, limit} = useTypedSelector(state => state.products)
  const {setProductsPage} = useActions()

  const paths: IPaths[] = [
    {
      name: 'Косметика и гигиена',
      link: COSMETICS_HYGIENE_ROUTE
    }
  ]

  const handleClickType = (type: string): void => {
    const key = type as keyof typeof FilterTypes
    if (FilterTypes[key] === selectedTypeFilter) {
      setSelectedTypeFilter(null)
    } else {
      setSelectedTypeFilter(FilterTypes[key])
    }
  }

  const fetchFilterProducts = () => {
    setProductsPage(1)
    fetchProducts(1, limit, {
      type: selectedTypeFilter,
      minPrice: minPrice,
      maxPrice: maxPrice,
      manufacturers: manufacturers
    })
  }

  useEffect(() => {
    fetchProducts(page, limit)
  }, [page])

  useEffect(() => {
    fetchFilterProducts()
    setManufacturers([])
  }, [selectedTypeFilter])

  return (
    <div className={'pageContent'}>
      <ContentWrapper>
        <Paths paths={paths}/>
        <div className={styles.cosmeticsHygiene}>
          <h1>Косметика и гигиена</h1>
          <Sort/>
        </div>
        <TypeFilter types={COSMETICS_HYGIENE_TYPES}
                    selectedType={selectedTypeFilter}
                    setSelectedType={handleClickType}
        />
        <Catalog selectedType={selectedTypeFilter}
                 setSelectedType={handleClickType}
                 minPrice={minPrice}
                 setMinPrice={setMinPrice}
                 maxPrice={maxPrice}
                 setMaxPrice={setMaxPrice}
                 fetchFilter={fetchFilterProducts}
        />
      </ContentWrapper>
      <Footer/>
    </div>
  )
}

export default CosmeticsHygiene