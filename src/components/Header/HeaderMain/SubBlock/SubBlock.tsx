import React, {FC} from 'react'
import styles from './SubBlock.module.scss'
import callCenter from '../../../../assets/img/call-center.png'
import download from '../../../../assets/icons/download.svg'
import basket from '../../../../assets/icons/basket.svg'
import {useNavigate} from 'react-router-dom'
import {BASKET_ROUTE} from '../../../../utils/consts'
import {useTypedSelector} from '../../../../hooks/useTypedSelector'
import {formatPrice} from '../../../../utils/functions'

const SubBlock: FC = () => {
  const navigate = useNavigate()
  const {totalPrice, totalCount} = useTypedSelector(state => state.basket)

  return (
    <div className={styles.subBlock}>
      <div className={styles.subBlock__contacts}>
        <div className={styles.subBlock__info}>
          <div className={styles.subBlock__info_phoneNumber}>+7 (777) 490-00-91</div>
          <div className={styles.subBlock__info_workingHours}>время работы: 9:00-20:00</div>
          <a href={'tel: +77774900091'} className={styles.subBlock__info_call}>Заказать звонок</a>
        </div>
        <img src={callCenter} alt="call-center"/>
        <div className={`dashedLineVert ${styles.subBlock__line}`}></div>
      </div>
      <div className={`button ${styles.subBlock__priceList}`}>
        <span>Прайс-лист</span>
        <img width={17} src={download} alt="download"/>
      </div>
      <div className={`dashedLineVert ${styles.subBlock__line}`}></div>
      <div className={styles.subBlock__basket} onClick={() => navigate(BASKET_ROUTE)}>
        <div className={styles.subBlock__basket__basketIcon}>
          <img width={46} src={basket} alt="basket"/>
          {totalCount > 0 &&  <div className={styles.subBlock__basket_counter}>{totalCount}</div>}
        </div>
        <div className={styles.subBlock__price}>
          <div className={styles.subBlock__price_title}>Корзина</div>
          <div className={styles.subBlock__price_subTitle}>{formatPrice(totalPrice)} ₸</div>
        </div>
      </div>
    </div>
  )
}

export default SubBlock