import React, {FC} from 'react'
import styles from './ProductSize.module.scss'
import {VolumeIcon, WeightIcon} from '../svg'

interface ProductSizeProps {
  sizeType: string
  size: number
}

const ProductSize: FC<ProductSizeProps> = ({sizeType, size}) => {
  return (
    <div className={styles.productSize}>
      {sizeType === 'volume' ? <VolumeIcon/> : <WeightIcon/>}
      <span>{size} {sizeType === 'volume' ? 'мл' : 'г'}</span>
    </div>
  )
}

export default ProductSize