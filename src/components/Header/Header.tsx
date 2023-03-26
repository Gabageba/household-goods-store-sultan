import React, {FC, useState} from 'react'
import styles from './Header.module.scss'
import HeaderAbout from './HeaderAbout/HeaderAbout'
import HeaderMain from './HeaderMain/HeaderMain'


const Header: FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false)

  const burgerMenuClickHandler = () => {
    setIsBurgerActive(prevState => !prevState)
  }

  return (
    <>
      <header className={styles.header}>
        <HeaderAbout isBurgerActive={isBurgerActive}/>
        <div className={`underline ${styles.header__underLine}`}></div>
        <HeaderMain burgerMenuClickHandler={burgerMenuClickHandler} isBurgerActive={isBurgerActive}/>
        <div className={`underline ${styles.header__underLine}`}></div>
      </header>
      {/*{isBurgerActive && <div className={styles.background}></div>}*/}

    </>

  )
}

export default Header