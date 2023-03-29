import React from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import styles from './Pagination.module.scss'
import {PaginationArrowIcon} from '../svg'
import {useActions} from '../../hooks/useActions'

const Pagination = () => {
  const {totalCount, limit, page} = useTypedSelector(state => state.products)
  const {setProductsPage} = useActions()

  const getPages = (limit: number): number[] => {
    const pages: number[] = []
      for (let i = 0; i < Math.ceil(totalCount / limit); i++) {
          pages.push(i + 1)
      }
    return pages
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__arrow_left} onClick={() => setProductsPage(page - 1)}><PaginationArrowIcon/></div>
      {
        getPages(limit).map(pageItem =>
          <div className={`${styles.pagination__page} ${pageItem === page ? styles.pagination__page_active: ''}`}
               onClick={() => setProductsPage(pageItem)}>
            {pageItem}
          </div>
        )
      }
      <div className={styles.pagination__arrow_right} onClick={() => setProductsPage(page + 1)}><PaginationArrowIcon/></div>
    </div>
  )
}

export default Pagination