import React, {useState} from 'react'
import styles from './Sort.module.scss'
import {SORT_TYPES} from '../../utils/consts'
import {MoreIcon} from '../svg'

const Sort = () => {
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false)
  const [currentSort, setCurrentSort] = useState<string>('name')

  const getSortTypeName = (id: string): string => {
    let name = ''
    SORT_TYPES.forEach(type => {
      if (type.id === id) {
        name = type.name
      }
    })
    return name
  }

  const handleDropDownItemClick = (id: string): void => {
    setCurrentSort(id)
    setIsDropDownActive(false)
  }

  return (
    <div className={styles.sort}>
      <div className={styles.sort__header}>Сортировка:</div>
      <div className={styles.sort__chooseSortType}>
        <div className={`${styles.sort__currentSortType} ${isDropDownActive ? styles.sort__currentSortType_active : ''}`} onClick={() => setIsDropDownActive(prevState => !prevState)}>
          <span>{getSortTypeName(currentSort)}</span>
          <MoreIcon/>
        </div>
        <div className={`${styles.dropDown} ${isDropDownActive ? styles.dropDown_active : ''}`}>
          {
            SORT_TYPES.map(type => {
              return type.id !== currentSort &&
                <div className={styles.dropDown__item} key={type.id} onClick={() => handleDropDownItemClick(type.id)}>{type.name}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sort