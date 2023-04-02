import React, {FC} from 'react'
import styles from './Footer.module.scss'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import {PaginationArrowIcon, SultanLogo} from '../svg'
import download from '../../assets/icons/download.svg'
import whatsApp from '../../assets/icons/whats-app.svg'
import telegram from '../../assets/icons/telegram.svg'
import visa from '../../assets/icons/visa.svg'
import mastercard from '../../assets/icons/mastercard.svg'

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <ContentWrapper>
        <div className={styles.footer__content}>
          <div className={styles.company}>
            <div className={styles.company__logo}>
              <SultanLogo/>
              <div className={`button ${styles.footer__priceList}`}>
                <span>Прайс-лист</span>
                <img width={17} src={download} alt="download"/>
              </div>
            </div>
            <div className={styles.company__about}>
              Компания «Султан» — снабжаем розничные магазины товарами
              "под ключ" в Кокчетаве и Акмолинской области
            </div>
            <div className={styles.company__subscribe}>Подпишись на скидки и акции</div>
            <div className={`textInput ${styles.input}`}>
              <input type="text" placeholder={'Введите ваш E-mail'}/>
              <div className={styles.input__send}><PaginationArrowIcon/></div>
            </div>
          </div>
          <div style={{gridArea: 'menu'}}>
            <h2>Меню сайта:</h2>
            <div className={styles.footer__list}>
              <div>О компании</div>
              <div>Доставка и оплата</div>
              <div>Возврат</div>
              <div>Контакты</div>
            </div>
          </div>
          <div style={{gridArea: 'category'}}>
            <h2>Категории:</h2>
            <div className={styles.footer__list}>
              <div>Бытовая химия</div>
              <div>Косметика и гигиена</div>
              <div>Товары для дома</div>
              <div>Товары для детей и мам</div>
              <div>Посуда</div>
            </div>
          </div>
          <div className={styles.footer__column}>
            <h2>Скачать прайс-лист:</h2>
            <div className={`button ${styles.footer__priceList}`}>
              <span>Прайс-лист</span>
              <img width={17} src={download} alt="download"/>
            </div>
            <div className={styles.socialNetworks}>
              <span>Связь в мессенджерах:</span>
              <div className={styles.socialNetworks__icons}>
                <img width={39} src={whatsApp} alt="whats-app"/>
                <img width={39} src={telegram} alt="telegram"/>
              </div>
            </div>
          </div>
          <div style={{gridArea: 'contacts'}}>
            <h2>Контакты:</h2>
            <div className={styles.contacts__block}>
              <div>
                <div className={styles.contacts}>
                  <div className={styles.contacts__mainInfo}>+7 (777) 490-00-91</div>
                  <div className={styles.contacts__subInfo}>время работы: 9:00-20:00</div>
                  <div className={styles.contacts__order}>Заказать звонок</div>
                </div>
                <div className={styles.contacts}>
                  <div className={styles.contacts__mainInfo}>opt.sultan@mail.ru</div>
                  <div className={styles.contacts__subInfo}>На связи в любое время</div>
                </div>
                <div className={styles.footer__paymentMethod}>
                  <img src={visa} alt="visa"/>
                  <img src={mastercard} alt="mastercard"/>
                </div>
              </div>
              <div className={styles.socialNetworks}>
                <span>Связь в мессенджерах:</span>
                <div className={styles.socialNetworks__icons}>
                  <img width={39} src={whatsApp} alt="whats-app"/>
                  <img width={39} src={telegram} alt="telegram"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Footer