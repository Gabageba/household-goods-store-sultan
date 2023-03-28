import React, {FC} from 'react'
import styles from './CustomCheckbox.module.scss'

interface CustomCheckboxProps {
  name: string,
  count?: number
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({name, count}) => {
  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox" name="customCheckBox"/>
      <div className={styles.customCheckbox__title}>
        <div className={styles.customCheckbox__name}>{name}</div>
        {count && <div className={styles.customCheckbox__count}>({count})</div>}
      </div>
    </label>
  )
}

export default CustomCheckbox