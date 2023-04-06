import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import {IProduct} from '../../types/products'
import {getProduct,} from '../../api/productsApi'
import styles from './ProductsPage.module.scss'
import Paths from '../../components/Paths/Paths'
import MainInfo from './MainInfo/MainInfo'
import InfoItem from './InfoItem/InfoItem'
import HiddenInfo from './HiddenInfo/HiddenInfo'
import Footer from '../../components/Footer/Footer'
import {useActions} from '../../hooks/useActions'

const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>()
  const [counter, setCounter] = useState<number>(1)
  const {addBasketItem} = useActions()
  const {barcode} = useParams()
  const url = `${window.location.protocol}//${window.location.host}/`

  useEffect(() => {
    if (barcode) {
      getProduct(barcode).then(product => {
        if (product) {
          setProduct(product)
        }
      })
    }
  }, [barcode])

  return (
    <div className={'pageContent'}>
      <ContentWrapper>
        <Paths/>
        {
          product &&
          <div className={styles.productPage}>
            <img className={styles.productPage__image} src={url + product.url} alt={product.name}/>
            <div>
              <MainInfo brand={product.brand} name={product.name} price={product.price} setCounter={setCounter}
                        counter={counter} sizeType={product.sizeType} size={product.size}
                        buttonClickHandler={() => addBasketItem(product, counter)}/>
              <div className={styles.productPage__subInfo}>
                <InfoItem title={'Производитель'} info={product.manufacturer}/>
                <InfoItem title={'Бренд'} info={product.brand}/>
                <InfoItem title={'Артикул'} info={product.barcode}/>
                <InfoItem title={'Штрихкод'} info={product.barcode}/>
              </div>
              <HiddenInfo title={'Описание'}>
                <span className={styles.productPage__description}>{product.description}</span>
              </HiddenInfo>
              <div className={styles.productPage__line}></div>
              <HiddenInfo title={'Характеристики'}>
                <InfoItem title={'Назначение'} info={product.careType}/>
                <InfoItem title={'Тип'} info={product.careType}/>
                <InfoItem title={'Производитель'} info={product.manufacturer}/>
                <InfoItem title={'Бренд'} info={product.brand}/>
                <InfoItem title={'Артикул'} info={product.barcode}/>
                <InfoItem title={'Штрихкод'} info={product.barcode}/>
                <InfoItem title={'Вес'} info={product.size}/>
                <InfoItem title={'Объем'} info={product.size}/>
                <InfoItem title={'Кол-во в коробке'} info={1}/>
              </HiddenInfo>
            </div>
          </div>
        }
      </ContentWrapper>
      <Footer/>
    </div>
  )
}

export default ProductPage