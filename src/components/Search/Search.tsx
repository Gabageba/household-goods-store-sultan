import React from 'react'
import styles from './Search.module.scss'
import {SearchSvg} from '../svg'

const Search = () => {
  return (
    <div className={`searchInput ${styles.search}`}>
      <div className={styles.search__content}>
        <input type="text" placeholder={'Поиск...'}/>
        <div className={styles.search__button}>
          <SearchSvg/>
        </div>
        <div className={styles.search__text}>Поиск</div>
      </div>
    </div>
  )
}

export default Search