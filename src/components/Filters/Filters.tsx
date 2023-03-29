import React from 'react'
import styles from './Filters.module.scss'
import Price from './Price/Price'
import FilterWithCheckbox from '../FilterWithCheckbox/filterWithCheckbox'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import deleteIcon from '../../assets/icons/delete.svg'
import Types from './Types/Types'
import {COSMETICS_HYGIENE_TYPES} from '../../utils/consts'

const Filters = () => {
  const {productsType} = useTypedSelector(state => state.products)
  return (
    <div className={styles.filters}>
      <h3 >Подбор по параметрам</h3>
      <Price />
      <FilterWithCheckbox title={'Производитель'} types={productsType}/>
      <div className={styles.buttons}>
        <div className={`button ${styles.button__show}`}>Показать</div>
        <div className={styles.button__clear}>
          <img src={deleteIcon} alt="delete"/>
        </div>
      </div>
      <Types types={COSMETICS_HYGIENE_TYPES}/>
    </div>
  )
}

export default Filters