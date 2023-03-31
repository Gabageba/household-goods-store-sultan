import React, {useEffect} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import {IPaths} from '../../types/path'
import {BASKET_ROUTE} from '../../utils/consts'
import BasketCard from '../../components/BasketCard/BasketCard'
import Footer from '../../components/Footer/Footer'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import styles from './Basket.module.scss'

const Basket = () => {
  const paths: IPaths[] = [
    {
      name: 'Корзина',
      link: BASKET_ROUTE
    }
  ]
  const {basketItems, totalPrice} = useTypedSelector(state => state.basket)
  const {fetchBasketItems} = useActions()

  useEffect(() => {
    fetchBasketItems()
  }, [])

  return (
    <div className={`pageContent ${styles.basket}`}>
      <ContentWrapper>
        <Paths paths={paths}/>
        <h1>Корзина</h1>
        {
          basketItems.length > 0
            ? <div>
              {
                basketItems.map(item =>
                  <BasketCard key={item.product.id} product={item.product} amount={item.amount}/>
                )
              }
              <div>
                <div className="button">Оформить заказ</div>
                <div>{totalPrice} ₸</div>
              </div>
            </div>
            : <div className={styles.basket__notFound}>Ваша корзина пуста</div>
        }
      </ContentWrapper>
      <Footer/>
    </div>
  )
}

export default Basket