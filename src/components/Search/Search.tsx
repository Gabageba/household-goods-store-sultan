import React, {FC, useEffect, useState} from 'react'
import styles from './Search.module.scss'
import {SearchIcon} from '../svg'

interface SearchProps {
  inputChangeHandler: (str: string) => void
}

const Search: FC<SearchProps> = ({inputChangeHandler}) => {
  const [filterText, setFilterText] = useState<string>('')

  useEffect(() => {
    inputChangeHandler(filterText)
  }, [filterText])

  return (
    <div className={`textInput ${styles.search}`}>
      <div className={styles.search__content}>
        <input type="text" placeholder={'Поиск...'} value={filterText} onChange={e => setFilterText(e.target.value)}/>
        <div className={styles.search__button}>
          <SearchIcon/>
        </div>
        <div className={styles.search__text}>Поиск</div>
      </div>
    </div>
  )
}

export default Search