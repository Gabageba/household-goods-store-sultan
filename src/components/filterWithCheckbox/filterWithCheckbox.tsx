import React, {FC, useEffect, useState} from 'react'
import styles from './filterWithCheckbox.module.scss'
import Search from '../Search/Search'
import CustomCheckbox from '../customCheckbox/CustomCheckbox'
import {IManufacturer} from '../../types/filter'
import {MoreIcon} from '../svg'
import {IProductTypes} from '../../types/products'

interface FilterWithCheckboxProps {
  title: string,
  types: IProductTypes[]
}

const FilterWithCheckbox: FC<FilterWithCheckboxProps> = ({title, types}) => {
  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([])
  const [isShowMore, setIsShoreMore] = useState<boolean>(false)

  useEffect(() => {
    if (isShowMore) {
      setManufacturers(types)
    } else {
      setManufacturers(types.slice(0, 4))
    }
  }, [isShowMore, types])

  return (
    <>
      {
        manufacturers &&
        <div className={styles.filterWithCheckbox}>
          <div className={styles.filterWithCheckbox__title}>{title}</div>
          <Search/>
          <div className={styles.filterWithCheckbox__points}>
            {
              manufacturers.map((manufacturer, index) =>
                <CustomCheckbox key={index} name={manufacturer.name} count={manufacturer.count}/>
              )
            }
          </div>
          {
            types.length > 4 &&
            <div className={`${styles.showMore} ${isShowMore ? styles.showMore_active : ''}`} onClick={() => setIsShoreMore(prevState => !prevState)}>
              <span>{isShowMore ? 'Скрыть все' : 'Показать все'}</span>
              <MoreIcon/>
            </div>
          }

        </div>
      }
    </>
  )
}

export default FilterWithCheckbox