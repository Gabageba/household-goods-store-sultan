import React, {FC} from 'react'
import styles from './TypeFilter.module.scss'

interface TypeFilterProps {
  types: string[]
}

const TypeFilter: FC<TypeFilterProps> = ({types}) => {
  return (
    <div className={styles.typeFilter}>
      {types.map((type, id) => {
        const typeArr = type.split(' ')
        return (
          <div className={styles.typeFilter__card} key={id}>
            {typeArr[0]}
            <br/>
            {typeArr.slice(1).join(' ')}
          </div>
        )
      })}
    </div>
  )
}

export default TypeFilter