import React, { useState} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import BasketCard from '../../components/BasketCard/BasketCard'
import Footer from '../../components/Footer/Footer'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import styles from './Basket.module.scss'
import {formatPrice} from '../../utils/functions'
import PopUpBlock from '../../components/PopUpBlock/PopUpBlock'
import {useActions} from '../../hooks/useActions'

const Basket = () => {
  const {basketItems, totalPrice} = useTypedSelector(state => state.basket)
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false)
  const {clearBasket} = useActions()

  const purchaseClickHandler = () => {
    if (basketItems) {
      setIsPopUpVisible(true)
      clearBasket()
    }
  }

  return (
    <div className={`pageContent ${styles.basket}`}>
      <PopUpBlock text={'Спасибо за покупку'} isVisible={isPopUpVisible} setIsVisible={setIsPopUpVisible}/>
      <ContentWrapper>
        <Paths/>
        <h1>Корзина</h1>
        {
          basketItems.length > 0
            ? <div className={styles.basket__items}>
              {
                basketItems.map((item, index) =>
                  <div key={index}>
                    {index === 0 && <div className={`${styles.basket__underline}`}></div>}
                    <BasketCard key={item.product.id} product={item.product} amount={item.amount}/>
                    <div className={`${styles.basket__underline}`}></div>
                  </div>
                )
              }
              <div className={styles.basket__purchase}>
                <div className={`button ${styles.basket__button}`} onClick={purchaseClickHandler}>Оформить заказ</div>
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