import React, {useEffect, useState} from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Paths from '../../components/Paths/Paths'
import BasketCard from '../../components/BasketCard/BasketCard'
import Footer from '../../components/Footer/Footer'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import styles from './Basket.module.scss'
import {formatPrice, setBodyOverflow} from '../../utils/functions'
import {useActions} from '../../hooks/useActions'
import {overflowVariant} from '../../types/overflow'
import OrderModalWindow from '../../components/Modals/OrderModalWindow/OrderModalWindow'

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

  useEffect(() => {
    if (isPopUpVisible) {
      setBodyOverflow(overflowVariant.hidden)
    } else {
      setBodyOverflow(overflowVariant.auto)
    }
  }, [isPopUpVisible])

  return (
    <div className={`pageContent ${styles.basket}`}>
      {isPopUpVisible && <OrderModalWindow setModalActive={setIsPopUpVisible}
                                           title={'Спасибо за заказ'}
                                           text={'Наш менеджер свяжется с вами в ближайшее время'}/>}
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
                <div className={styles.basket__totalPrice}>{formatPrice(totalPrice)} ₸</div>
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