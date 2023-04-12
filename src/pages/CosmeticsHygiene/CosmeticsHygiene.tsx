import React, {useEffect, useState} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import {COSMETICS_HYGIENE_TYPES, SORT_TYPES} from '../../utils/consts'
import Sort from '../../components/Sort/Sort'
import styles from './CosmeticsHygiene.module.scss'
import TypeFilter from '../../components/TypeFilter/TypeFilter'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import Footer from '../../components/Footer/Footer'
import {FilterTypes} from '../../types/filter'
import Loader from '../../components/Loader/Loader'
import {ISort} from '../../types/sort'
import Catalog from '../../components/Catalog/Catalog'

const CosmeticsHygiene = () => {
  const [selectedTypeFilters, setSelectedTypeFilters] = useState<FilterTypes[]>([])
  const [selectedMinPrice, setSelectedMinPrice] = useState<string>('')
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<string>('')
  const [currentSort, setCurrentSort] = useState<ISort>(SORT_TYPES[0])
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([])
  const {fetchProducts} = useActions()
  const {page, limit, isLoading} = useTypedSelector(state => state.products)
  const {setProductsPage} = useActions()

  const selectManufacturers = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedManufacturers(prevState => {
        return [...prevState, e.target.value]
      })
    } else {
      setSelectedManufacturers(prevState => {
        const index = prevState.indexOf(e.target.value)
        prevState.splice(index, 1)
        return [...prevState]
      })
    }
  }

  const handleClickType = (type: string): void => {
    const key = type as keyof typeof FilterTypes
    const index = selectedTypeFilters.findIndex(t => t === FilterTypes[key])
    if (index !== -1) {
      let result = selectedTypeFilters
      result.splice(index, 1)
      setSelectedTypeFilters([...result])
    } else {
      setSelectedTypeFilters(prevState => [...prevState, FilterTypes[key]])
    }

  }

  const clearFilter = () => {
    setProductsPage(1)
    setSelectedManufacturers([])
    setSelectedMaxPrice('')
    setSelectedMinPrice('')
    fetchProducts(1, limit, currentSort, {types: selectedTypeFilters})
  }

  const fetchFilterProducts = () => {
    setProductsPage(1)
    fetchProducts(1, limit, currentSort, {
      types: selectedTypeFilters,
      minPrice: selectedMinPrice,
      maxPrice: selectedMaxPrice,
      manufacturers: selectedManufacturers
    })
  }

  useEffect(() => {
    fetchProducts(page, limit, currentSort, {
      types: selectedTypeFilters,
      minPrice: selectedMinPrice,
      maxPrice: selectedMaxPrice,
      manufacturers: selectedManufacturers
    })
  }, [page])

  useEffect(() => {
    fetchFilterProducts()
  }, [selectedTypeFilters, currentSort])

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className={'pageContent'} data-testid={'cosmetics-hygiene-page'}>
      <ContentWrapper>
        <Paths/>
        <div className={styles.cosmeticsHygiene}>
          <h1>Косметика и гигиена</h1>
          <div className={styles.cosmeticsHygiene__sort}>
            <Sort currentSort={currentSort} setCurrentSort={setCurrentSort}/>
          </div>
        </div>
        <TypeFilter types={COSMETICS_HYGIENE_TYPES}
                    selectedType={selectedTypeFilters}
                    setSelectedType={handleClickType}
        />
        <Catalog selectedType={selectedTypeFilters}
                 setSelectedType={handleClickType}
                 selectedMinPrice={selectedMinPrice}
                 setSelectedMinPrice={setSelectedMinPrice}
                 selectedMaxPrice={selectedMaxPrice}
                 setSelectedMaxPrice={setSelectedMaxPrice}
                 fetchFilter={fetchFilterProducts}
                 setSelectedManufacturers={selectManufacturers}
                 clearFilters={clearFilter}
                 selectedManufacturers={selectedManufacturers}
                 currentSort={currentSort}
                 setCurrentSort={setCurrentSort}
        />
      </ContentWrapper>
      <Footer/>
    </div>
  )
}

export default CosmeticsHygiene