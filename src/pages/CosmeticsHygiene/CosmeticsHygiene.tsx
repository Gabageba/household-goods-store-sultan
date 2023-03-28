import React from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import {COSMETICS_HYGIENE_ROUTE, COSMETICS_HYGIENE_TYPES} from '../../utils/consts'
import {IPaths} from '../../types/path'
import Sort from '../../components/Sort/Sort'
import styles from './CosmeticsHygiene.module.scss'
import TypeFilter from '../../components/TypeFilter/TypeFilter'
import Catalog from '../../components/Catalog/Catalog'

const CosmeticsHygiene = () => {
  const paths: IPaths[] = [
    {
      name: 'Косметика и гигиена',
      link: COSMETICS_HYGIENE_ROUTE
    }
  ]

  return (
    <ContentWrapper>
      <Paths paths={paths}/>
      <div className={styles.cosmeticsHygiene}>
        <h1>Косметика и гигиена</h1>
        <Sort />
      </div>
      <TypeFilter types={COSMETICS_HYGIENE_TYPES} />
      <Catalog />
    </ContentWrapper>
  )
}

export default CosmeticsHygiene