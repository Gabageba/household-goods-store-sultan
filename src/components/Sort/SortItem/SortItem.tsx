import React, {FC} from 'react'
import styles from './SortItem.module.scss'
import {MoreIcon} from '../../svg'
import {SortTypesPosition} from '../../../types/sort'

interface SortItemProps {
  name: string
  position: SortTypesPosition
  handleClick: () => void
}

const SortItem: FC<SortItemProps> = ({name, handleClick, position}) => {
  return (
    <div className={`${styles.sortItem}`} onClick={handleClick}>
      <span>{name}</span>
      <div className={`${styles.sortItem__icon} ${position === SortTypesPosition.up ? styles.sortItem__icon_up : ''}`}>
        <MoreIcon/>
      </div>
    </div>
  )
}

export default SortItem