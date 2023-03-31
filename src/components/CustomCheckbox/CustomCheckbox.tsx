import React, {FC, useEffect, useState} from 'react'
import styles from './CustomCheckbox.module.scss'

interface CustomCheckboxProps {
  name: string
  count?: number
  selectedManufacturers: string[]
  setSelectedManufacturers: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({name, count, setSelectedManufacturers, selectedManufacturers}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    if (selectedManufacturers.find(manufacturer => manufacturer === name)) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [selectedManufacturers])

  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox" name="customCheckBox" onChange={setSelectedManufacturers} value={name} checked={isChecked}/>
      <div className={styles.customCheckbox__title}>
        <div className={styles.customCheckbox__name}>{name}</div>
        {count && <div className={styles.customCheckbox__count}>({count})</div>}
      </div>
    </label>
  )
}

export default CustomCheckbox