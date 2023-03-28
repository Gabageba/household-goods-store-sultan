import React, {FC} from 'react'
import styles from './ButtonsBlock.module.scss'
import {CatalogSvg, SearchSvg} from '../../../svg'
import {useNavigate} from 'react-router-dom'
import {COSMETICS_HYGIENE_ROUTE} from '../../../../utils/consts'

const ButtonsBlock: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.buttonsBlock}>
      <div className={`button ${styles.buttonsBlock__catalog}`} onClick={() => navigate(COSMETICS_HYGIENE_ROUTE)}>
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