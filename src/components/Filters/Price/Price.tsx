import React, {Dispatch, FC, SetStateAction} from 'react'
import styles from './Price.module.scss'

interface PriceProps {
  minPrice: string
  setMinPrice: Dispatch<SetStateAction<string>>
  maxPrice: string
  setMaxPrice: Dispatch<SetStateAction<string>>
}

const Price: FC<PriceProps> = ({minPrice, setMinPrice, setMaxPrice, maxPrice}) => {
  return (
    <div className={styles.price}>
      <div className={styles.title}>
        <div>Цена</div>
        <span>₸</span>
      </div>
      <div className={styles.price__range}>
        <input type={'number'} className={styles.price__range_input} placeholder={'мин'} onChange={e => setMinPrice(e.target.value)} value={minPrice}/>
        <span>-</span>
        <input type={'number'} className={styles.price__range_input} placeholder={'макс'} onChange={e => setMaxPrice(e.target.value)} value={maxPrice}/>
      </div>
    </div>
  )
}

export default Price