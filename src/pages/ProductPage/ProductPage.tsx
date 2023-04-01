import React from 'react'
import {useParams} from 'react-router-dom'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'

const ProductPage = () => {
    const {barcode} = useParams()

  return (
    <div className={'pageContent'}>
      <ContentWrapper>
        {barcode}
      </ContentWrapper>
    </div>
  )
}

export default ProductPage