import React, {useEffect} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import {COSMETICS_HYGIENE_ROUTE, COSMETICS_HYGIENE_TYPES} from '../../utils/consts'
import {IPaths} from '../../types/path'
import Sort from '../../components/Sort/Sort'
import styles from './CosmeticsHygiene.module.scss'
import TypeFilter from '../../components/TypeFilter/TypeFilter'
import Catalog from '../../components/Catalog/Catalog'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import Footer from '../../components/Footer/Footer'

const CosmeticsHygiene = () => {
  const {fetchProducts} = useActions()
  const {page, limit} = useTypedSelector(state => state.products)

  const paths: IPaths[] = [
    {
      name: 'Косметика и гигиена',
      link: COSMETICS_HYGIENE_ROUTE
    }
  ]

  useEffect(() => {
    fetchProducts(page, limit)
  }, [page])

  return (
    <div className={'pageContent'}>
      <ContentWrapper>
        <Paths paths={paths}/>
        <div className={styles.cosmeticsHygiene}>
          <h1>Косметика и гигиена</h1>
          <Sort />
        </div>
        <TypeFilter types={COSMETICS_HYGIENE_TYPES} />
        <Catalog />
      </ContentWrapper>
      <Footer />
    </div>
  )
}

export default CosmeticsHygiene