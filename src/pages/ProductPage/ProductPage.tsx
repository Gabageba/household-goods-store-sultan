import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import {IProduct} from '../../types/products'
import {getProduct,} from '../../api/productsApi'
import ProductCounter from '../../components/ProductCounter/ProductCounter'
import {BasketIcon, DownloadSvg} from '../../components/svg'
import styles from './ProductsPage.module.scss'
import {IPaths} from '../../types/path'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'
import Paths from '../../components/Paths/Paths'
import ProductSize from '../../components/ProductSize/ProductSize'
import share from '../../assets/icons/share.svg'
import {formatPrice} from '../../utils/functions'
import MainInfo from './MainInfo/MainInfo'
import InfoItem from './InfoItem/InfoItem'
import HiddenInfo from './HiddenInfo/HiddenInfo'
import Footer from '../../components/Footer/Footer'

const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>()
  const [counter, setCounter] = useState<number>(1)
  const {barcode} = useParams()
  const url = `${window.location.protocol}//${window.location.host}/`
  const paths: IPaths[] = [
    {
      name: 'Косметика и гигиена',
      link: COSMETICS_HYGIENE_ROUTE
    },
    {
      name: product?.name || '',
      link: `${COSMETICS_HYGIENE_ROUTE}/${product?.barcode}`
    }
  ]

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
        <Paths paths={paths}/>
        {
          product &&
          <div className={styles.productPage}>
            <img width={664} src={url + product.url} alt={product.name}/>
            <div>
              <MainInfo brand={product.brand} name={product.name} price={product.price} setCounter={setCounter}
                        counter={counter} sizeType={product.sizeType} size={product.size}/>
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
      <Footer />
    </div>
  )
}

export default ProductPage