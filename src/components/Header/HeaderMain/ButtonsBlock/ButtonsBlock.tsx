import React, {FC} from 'react'
import styles from './ButtonsBlock.module.scss'
import {CatalogSvg, SearchSvg} from '../../../svg'

const ButtonsBlock: FC = () => {
  return (
    <div className={styles.buttonsBlock}>
      <div className={`button ${styles.buttonsBlock__catalog}`}>
        <div className={styles.buttonsBlock__content}>
          <span>Каталог</span>
          <CatalogSvg/>
        </div>
      </div>
      <div className={`dashedLineVert ${styles.buttonsBlock__line}`}></div>
      <div className={`searchInput ${styles.buttonsBlock__search}`}>
        <div className={styles.buttonsBlock__content}>
          <input type="text" placeholder={'Поиск...'}/>
          <div className={styles.buttonsBlock__searchButton}>
            <SearchSvg/>
          </div>
          <div className={styles.buttonsBlock__searchText}>Поиск</div>
        </div>
      </div>
    </div>
  )
}

export default ButtonsBlock