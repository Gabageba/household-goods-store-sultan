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
  minPrice: string
  setMinPrice: Dispatch<SetStateAction<string>>
  maxPrice: string
  setMaxPrice: Dispatch<SetStateAction<string>>
  fetchFilter: () => void
}

const Filters: FC<FiltersProps> = ({selectedType, setSelectedType, setMinPrice, minPrice, maxPrice, setMaxPrice, fetchFilter}) => {
  const {productsType} = useTypedSelector(state => state.products)

  return (
    <div className={styles.filters}>
      <h3>Подбор по параметрам</h3>
      <Price minPrice={minPrice}
             setMinPrice={setMinPrice}
             maxPrice={maxPrice}
             setMaxPrice={setMaxPrice}
      />
      <FilterWithCheckbox title={'Производитель'} types={productsType}/>
      <div className={styles.buttons}>
        <div className={`button ${styles.button__show}`} onClick={fetchFilter}>Показать</div>
        <div className={styles.button__clear}>
          <img src={deleteIcon} alt="delete"/>
        </div>
      </div>
      <Types types={COSMETICS_HYGIENE_TYPES} setSelectedType={setSelectedType} selectedType={selectedType}/>
    </div>
  )
}

export default Filters