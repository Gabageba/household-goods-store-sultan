import React from 'react'
import ContentWrapper from '../../ContentWrapper/ContentWrapper'
import styles from './HeaderBottom.module.scss'
import sultanLogo from '../../../assets/sultanLogo.svg'
import catalog from '../../../assets/icons/catalog.svg'
import search from '../../../assets/icons/search.svg'
import callCenter from '../../../assets/img/call-center.png'
import download from '../../../assets/icons/download.svg'
import basket from '../../../assets/icons/basket.svg'

const HeaderBottom = () => {
  return (
    <ContentWrapper>
      <div className={styles.headerBottom}>
        <img width={156} src={sultanLogo} alt="sultan logo"/>
        <div className={styles.leftBlock}>
          <div className={`button ${styles.leftBlock__catalog}`}>
            <span>Каталог</span>
            <img src={catalog} alt="catalog"/>
          </div>
          <div className={`searchInput ${styles.leftBlock__search}`}>
            <input  type="text" placeholder={'Поиск...'}/>
            <div className={styles.leftBlock__searchButton}>
              <img width={18} src={search} alt="search"/>
            </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.rightBlock__contacts}>
            <div className={styles.rightBlock__info}>
              <div className={styles.rightBlock__info_phoneNumber}>+7 (777) 490-00-91</div>
              <div className={styles.rightBlock__info_workingHours}>время работы: 9:00-20:00</div>
              <a href={'tel: +77774900091'} className={styles.rightBlock__info_call}>Заказать звонок</a>
            </div>
            <img src={callCenter} alt="call-center"/>
          </div>
          <div className={`dashedLineVert ${styles.headerBottom__line}`}></div>
          <div className={`button ${styles.rightBlock__priceList}`}>
            <span>Прайс-лист</span>
            <img width={17} src={download} alt="download"/>
          </div>
          <div className={`dashedLineVert ${styles.headerBottom__line}`}></div>
          <div className={styles.rightBlock__basket}>
            <div className={styles.rightBlock__basket__basketIcon}>
              <img src={basket} alt="basket"/>
              <div className={styles.rightBlock__basket_counter}>3</div>
            </div>
            <div className={styles.rightBlock__price}>
              <div className={styles.rightBlock__price_title}>Корзина</div>
              <div className={styles.rightBlock__price_subTitle}>12 478 ₸</div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default HeaderBottom