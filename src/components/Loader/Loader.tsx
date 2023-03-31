import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.sblCirc}></div>
    </div>
  )
}

export default Loader