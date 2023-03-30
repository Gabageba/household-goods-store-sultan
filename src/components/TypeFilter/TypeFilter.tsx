import React, {Dispatch, FC, SetStateAction} from 'react'
import styles from './TypeFilter.module.scss'
import {FilterTypes, IType} from '../../types/filter'

interface TypeFilterProps {
  types: IType[],
  selectedType: FilterTypes | null,
  setSelectedType: (str: string) => void
}

const TypeFilter: FC<TypeFilterProps> = ({types, selectedType, setSelectedType}) => {

  return (
    <div className={styles.typeFilter}>
      {types.map((type) => {
        const typeArr = type.name.split(' ')
        return (
          <div className={`${styles.typeFilter__card} ${selectedType === FilterTypes[type.id as keyof typeof FilterTypes]? styles.typeFilter__card_active: ''}`} key={type.id} onClick={() => setSelectedType(type.id)}>
            {typeArr[0] + ' '}
            <br/>
            {typeArr.slice(1).join(' ')}
          </div>
        )
      })}
    </div>
  )
}

export default TypeFilter