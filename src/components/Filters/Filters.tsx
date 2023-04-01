import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import styles from './Filters.module.scss'
import Price from './Price/Price'
import FilterWithCheckbox from '../FilterWithCheckbox/filterWithCheckbox'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import deleteIcon from '../../assets/icons/delete.svg'
import Types from './Types/Types'
import {COSMETICS_HYGIENE_TYPES} from '../../utils/consts'
import {FilterTypes} from '../../types/filter'
import {PaginationArrowIcon} from '../svg'
import Sort from '../Sort/Sort'
import {ISort} from '../../types/sort'

interface FiltersProps {
  selectedType: FilterTypes[]
  setSelectedType: (str: string) => void
  selectedMinPrice: string
  setSelectedMinPrice: Dispatch<SetStateAction<string>>
  selectedMaxPrice: string
  setSelectedMaxPrice: Dispatch<SetStateAction<string>>
  selectedManufacturers: string[]
  setSelectedManufacturers: (e: React.ChangeEvent<HTMLInputElement>) => void
  fetchFilter: () => void
  clearFilters: () => void
  currentSort: ISort
  setCurrentSort: Dispatch<SetStateAction<ISort>>
}

const Filters: FC<FiltersProps> = ({
                                     selectedType,
                                     setSelectedType,
                                     setSelectedMaxPrice,
                                     setSelectedMinPrice,
                                     selectedMinPrice,
                                     selectedMaxPrice,
                                     setSelectedManufacturers,
                                     fetchFilter,
                                     clearFilters,
                                     selectedManufacturers,
  currentSort,
  setCurrentSort
                                   }) => {
  const {productsType} = useTypedSelector(state => state.products)
  const [isFilterShow, setIsFilterShow] = useState<boolean>(false)

  return (
    <div className={styles.filters}>
      <div className={styles.header} onClick={() => setIsFilterShow(prevState => !prevState)}>
        <h3>Подбор по параметрам</h3>
        <div className={`${styles.header__more} ${isFilterShow ? styles.header__more_active : ''}`}>
          <PaginationArrowIcon/>
        </div>
      </div>
      <div className={isFilterShow ? '' : styles.filters__unActive}>
        <Price minPrice={selectedMinPrice}
               setMinPrice={setSelectedMinPrice}
               maxPrice={selectedMaxPrice}
               setMaxPrice={setSelectedMaxPrice}
        />
        <FilterWithCheckbox title={'Производитель'}
                            types={productsType}
                            setSelectedManufacturers={setSelectedManufacturers}
                            selectedManufacturers={selectedManufacturers}
        />
        <div className={styles.buttons}>
          <div className={`button ${styles.button__show}`} onClick={fetchFilter}>Показать</div>
          <div className={styles.button__clear} onClick={clearFilters}>
            <img src={deleteIcon} alt="delete"/>
          </div>
        </div>
      </div>
      <Types types={COSMETICS_HYGIENE_TYPES} setSelectedType={setSelectedType} selectedType={selectedType}/>
      <div className={styles.filters__sort}>
        <Sort currentSort={currentSort} setCurrentSort={setCurrentSort}/>
      </div>
    </div>
  )
}

export default Filters