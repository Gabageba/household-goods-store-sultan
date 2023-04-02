import React, {useEffect} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import AdminCard from '../../components/AdminCard/AdminCard'
import {useActions} from '../../hooks/useActions'
import Paths from '../../components/Paths/Paths'
import AddCard from '../../components/AddCard/AddCard'

const Admin = () => {
  const {fetchProducts} = useActions()
  const {products} = useTypedSelector(state => state.products)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className={'pageContent'}>
      <ContentWrapper>
        <Paths/>
        <AddCard/>
        <div>
          {
            products.map(product =>
            <AdminCard product={product} key={product.id}/>
            )
          }
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Admin