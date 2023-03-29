import React, {FC} from 'react'
import styles from './Types.module.scss'

interface TypesProps {
  types: string[]
}

const Types: FC<TypesProps> = ({types}) => {
  return (
    <div className={styles.types}>
      <h3>Косметика и гигиена</h3>
      <div>
        {
          types.map((type, index) =>
            <div key={index} className={styles.types__item}>{type}</div>
          )
        }
      </div>
    </div>
  )
}

export default Types