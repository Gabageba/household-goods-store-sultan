import React, {FC, useEffect, useState} from 'react'
import styles from './filterWithCheckbox.module.scss'
import Search from '../Search/Search'
import CustomCheckbox from '../customCheckbox/CustomCheckbox'
import {IManufacturer} from '../../types/filter'
import {MoreIcon} from '../svg'

interface FilterWithCheckboxProps {
  title: string
}

const FilterWithCheckbox: FC<FilterWithCheckboxProps> = ({title}) => {
  const points: IManufacturer[] = [
    {
      name: 'Grifon',
      count: 56
    },
    {
      name: 'Boyscout',
      count: 66
    },
    {
      name: 'Paclan',
      count: 166
    },
    {
      name: 'Булгари Грин',
      count: 21
    },
    {
      name: 'Grifon',
      count: 56
    },
    {
      name: 'Grifon',
      count: 56
    },
  ]
  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([])
  const [isShowMore, setIsShoreMore] = useState<boolean>(false)

  useEffect(() => {
    const points: IManufacturer[] = [
      {
        name: 'Grifon',
        count: 56
      },
      {
        name: 'Boyscout',
        count: 66
      },
      {
        name: 'Paclan',
        count: 166
      },
      {
        name: 'Булгари Грин',
        count: 21
      },
      {
        name: 'Grifon',
        count: 56
      },
      {
        name: 'Grifon',
        count: 56
      },
    ]
    setManufacturers(points.slice(0, 4))
  }, [])

  useEffect(() => {
    if (isShowMore) {
      setManufacturers(points)
    } else {
      setManufacturers(points.slice(0, 4))
    }
  }, [isShowMore])

  return (
    <>
      {
        manufacturers &&
        <div className={styles.filterWithCheckbox}>
          <div className={styles.filterWithCheckbox__title}>{title}</div>
          <Search/>
          <div className={styles.filterWithCheckbox__points}>
            {
              manufacturers.map(manufacturer =>
                <CustomCheckbox name={manufacturer.name} count={manufacturer.count}/>
              )
            }
          </div>
          {
            points.length > 4 &&
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