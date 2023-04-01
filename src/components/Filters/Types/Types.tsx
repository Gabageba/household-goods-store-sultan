import React, {FC} from 'react'
import styles from './Types.module.scss'
import {FilterTypes, IType} from '../../../types/filter'

interface TypesProps {
  types: IType[]
  selectedType: FilterTypes[]
  setSelectedType: (str: string) => void
}

const Types: FC<TypesProps> = ({types, setSelectedType, selectedType}) => {

  return (
    <div className={styles.types}>
      <h3>Косметика и гигиена</h3>
      <div>
        {
          types.map((type) =>
            <div key={type.id}
                 className={`${styles.types__item} ${selectedType.includes(FilterTypes[type.id as keyof typeof FilterTypes]) ? styles.types__item_active : ''}`}
                 onClick={() => setSelectedType(type.id)}
            >
              {type.name}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Types