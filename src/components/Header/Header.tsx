import React, {FC, useEffect, useState} from 'react'
import styles from './Header.module.scss'
import HeaderAbout from './HeaderAbout/HeaderAbout'
import HeaderMain from './HeaderMain/HeaderMain'

enum overflowVariant {
  hidden = 'hidden',
  auto = 'auto'
}

const Header: FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false)

  const burgerMenuClickHandler = () => {
    setIsBurgerActive(prevState => !prevState)
  }

  const setBodyOverflow = (value: overflowVariant): void => {
    const bodyStyles = document.querySelector('body')?.style
    if (bodyStyles) {
      bodyStyles.overflow = value
    }
  }

  useEffect(() => {
    if (isBurgerActive) {
      setBodyOverflow(overflowVariant.hidden)
    } else {
      setBodyOverflow(overflowVariant.auto)
    }
  }, [isBurgerActive])


  return (
    <>
      <header className={styles.header}>
        <HeaderAbout isBurgerActive={isBurgerActive}/>
        <div className={`underline ${styles.header__underLine}`}></div>
        <HeaderMain burgerMenuClickHandler={burgerMenuClickHandler} isBurgerActive={isBurgerActive}/>
        <div className={`underline ${styles.header__underLine}`}></div>
      </header>
    </>

  )
}

export default Header