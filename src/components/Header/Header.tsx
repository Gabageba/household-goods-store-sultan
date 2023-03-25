import React from 'react'
import styles from './Header.module.scss'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderBottom from './HeaderBottom/HeaderBottom'

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderTop/>
      <div className={styles.header__underLine}></div>
      <HeaderBottom/>
      <div className={styles.header__underLine}></div>
    </header>
  )
}

export default Header