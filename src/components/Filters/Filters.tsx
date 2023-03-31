import React, {Dispatch, FC, SetStateAction} from 'react'
import styles from './Filters.module.scss'
import Price from './Price/Price'
import FilterWithCheckbox from '../FilterWithCheckbox/filterWithCheckbox'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import deleteIcon from '../../assets/icons/delete.svg'
import Types from './Types/Types'
import {COSMETICS_HYGIENE_TYPES} from '../../utils/consts'
import {FilterTypes} from '../../types/filter'

interface FiltersProps {
  selectedType: FilterTypes | null
  setSelectedType: (str: string) => void
  selectedMinPrice: string
  setSelectedMinPrice: Dispatch<SetStateAction<string>>
  selectedMaxPrice: string
  setSelectedMaxPrice: Dispatch<SetStateAction<string>>
  selectedManufacturers: string[]
  setSelectedManufacturers: (e: React.ChangeEvent<HTMLInputElement>) => void
  fetchFilter: () => void
  clearFilters: () => void
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
                                     selectedManufacturers
                                   }) => {
  const {productsType} = useTypedSelector(state => state.products)

  return (
    <div className={styles.filters}>
      <h3>Подбор по параметрам</h3>
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
      <Types types={COSMETICS_HYGIENE_TYPES} setSelectedType={setSelectedType} selectedType={selectedType}/>
    </div>
  )
}

export default Filters