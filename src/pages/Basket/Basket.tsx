import React, {useEffect} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import {IPaths} from '../../types/path'
import {BASKET_ROUTE} from '../../utils/consts'
import BasketCard from '../../components/BasketCard/BasketCard'
import Footer from '../../components/Footer/Footer'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import styles from './Basket.module.scss'
import {formatPrice} from '../../utils/functions'

const Basket = () => {
  const paths: IPaths[] = [
    {
      name: 'Корзина',
      link: BASKET_ROUTE
    }
  ]
  const {basketItems, totalPrice} = useTypedSelector(state => state.basket)

  return (
    <div className={`pageContent ${styles.basket}`}>
      <ContentWrapper>
        <Paths paths={paths}/>
        <h1>Корзина</h1>
        {
          basketItems.length > 0
            ? <div className={styles.basket__items}>
              {
                basketItems.map((item, index) =>
                  <div>
                    {index === 0 && <div className={`${styles.basket__underline}`}></div>}
                    <BasketCard key={item.product.id} product={item.product} amount={item.amount}/>
                    <div className={`${styles.basket__underline}`}></div>
                  </div>
                )
              }
              <div className={styles.basket__purchase}>
                <div className={`button ${styles.basket__button}`}>Оформить заказ</div>
                <div className={styles.basket__totalPrice}>{formatPrice(totalPrice) } ₸</div>
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