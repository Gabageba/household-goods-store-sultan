import React from 'react'
import styles from './Price.module.scss'

const Price = () => {
  return (
    <div className={styles.price}>
      <div className={styles.title}>
        <div>Цена</div>
        <span>₸</span>
      </div>
      <div className={styles.price__range}>
        <input type={'number'} className={styles.price__range_input} value={0}/>
        <span>-</span>
        <input type={'number'} className={styles.price__range_input} value={10000}/>
      </div>
    </div>
  )
}

export default Price