import React, {Dispatch, FC, SetStateAction, useState} from 'react'
import styles from './Sort.module.scss'
import {SORT_TYPES} from '../../utils/consts'
import {ISort} from '../../types/sort'
import SortItem from './SortItem/SortItem'

interface SortProps {
  currentSort: ISort
  setCurrentSort: Dispatch<SetStateAction<ISort>>
}

const Sort: FC<SortProps> = ({setCurrentSort, currentSort}) => {
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false)

  const handleDropDownItemClick = (type: ISort): void => {
    setCurrentSort(type)
    setIsDropDownActive(false)
  }

  return (
    <div className={styles.sort}>
      <div className={styles.sort__header}>Сортировка:</div>
      <div className={styles.sort__chooseSortType}>
        <SortItem name={currentSort.name} handleClick={() => setIsDropDownActive(prevState => !prevState)} position={currentSort.position}/>
        <div className={`${styles.dropDown} ${isDropDownActive ? styles.dropDown_active : ''}`}>
          {
            SORT_TYPES.map(type => {
              return type.id !== currentSort.id &&
                <SortItem name={type.name} handleClick={() => handleDropDownItemClick(type)} key={type.id} position={type.position}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sort