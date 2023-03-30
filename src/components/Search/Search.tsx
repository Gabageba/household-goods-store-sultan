import React from 'react'
import styles from './Search.module.scss'
import {SearchIcon} from '../svg'

const Search = () => {
  return (
    <div className={`textInput ${styles.search}`}>
      <div className={styles.search__content}>
        <input type="text" placeholder={'Поиск...'}/>
        <div className={styles.search__button}>
          <SearchIcon/>
        </div>
        <div className={styles.search__text}>Поиск</div>
      </div>
    </div>
  )
}

export default Search