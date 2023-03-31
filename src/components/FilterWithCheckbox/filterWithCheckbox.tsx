import React, {FC, useEffect, useState} from 'react'
import styles from './filterWithCheckbox.module.scss'
import Search from '../Search/Search'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import {IManufacturer} from '../../types/filter'
import {MoreIcon} from '../svg'
import {IProductTypes} from '../../types/products'

interface FilterWithCheckboxProps {
  title: string,
  types: IProductTypes[]
  selectedManufacturers: string[]
  setSelectedManufacturers: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterWithCheckbox: FC<FilterWithCheckboxProps> = ({
                                                           title,
                                                           types,
                                                           setSelectedManufacturers,
                                                           selectedManufacturers
                                                         }) => {
  const [filteredManufactured, setFilteredManufactured] = useState<IManufacturer[]>(types)
  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([])
  const [isShowMore, setIsShoreMore] = useState<boolean>(false)

  useEffect(() => {
    if (isShowMore) {
      setManufacturers(filteredManufactured)
    } else {
      setManufacturers(filteredManufactured.slice(0, 4))
    }
  }, [isShowMore, filteredManufactured])

  useEffect(() => {
    setFilteredManufactured(types)
  }, [types])

  const inputChangeHandler = (filterText: string) => {
    setFilteredManufactured(types.filter(type => type.name.toLowerCase().includes(filterText.toLowerCase())))
  }

  return (
    <>
      {
        manufacturers &&
        <div className={styles.filterWithCheckbox}>
          <div className={styles.filterWithCheckbox__title}>{title}</div>
          <Search inputChangeHandler={inputChangeHandler}/>
          <div className={styles.filterWithCheckbox__points}>
            {
              manufacturers.map((manufacturer, index) =>
                <CustomCheckbox key={index} name={manufacturer.name} count={manufacturer.count}
                                setSelectedManufacturers={setSelectedManufacturers}
                                selectedManufacturers={selectedManufacturers}/>
              )
            }
          </div>
          {
            filteredManufactured.length > 4 &&
            <div className={`${styles.showMore} ${isShowMore ? styles.showMore_active : ''}`}
                 onClick={() => setIsShoreMore(prevState => !prevState)}>
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