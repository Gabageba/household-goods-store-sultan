import React from 'react'
import styles from './HeaderTop.module.scss'
import address from '../../../assets/icons/address.svg'
import email from '../../../assets/icons/email.svg'
import ContentWrapper from '../../ContentWrapper/ContentWrapper'

const HeaderTop = () => {
  return (
    <ContentWrapper>
      <div className={styles.headerTop}>
        <div className={styles.headerTop__contacts}>
          <div className={styles.headerTop__contacts_info}>
            <img width={20} src={address} alt="address"/>
            <div>
              <div className={styles.headerTop__contacts_mainInfo}>г. Кокчетав, ул. Ж. Ташенова 129Б</div>
              <div className={styles.headerTop__contacts_subInfo}>(Рынок Восточный)</div>
            </div>
          </div>
          <div className={`dashedLineVert ${styles.headerTop__contacts_line}`}></div>
          <div className={styles.headerTop__contacts_info}>
            <img width={20} src={email} alt="email"/>
            <div>
              <div className={styles.headerTop__contacts_mainInfo}>opt.sultan@mail.ru</div>
              <div className={styles.headerTop__contacts_subInfo}>На связи в любое время</div>
            </div>
          </div>
        </div>
        <ul className={styles.headerTop__list}>
          <li>О компании</li>
          <div className={`dashedLineVert ${styles.headerTop__list_line}`}></div>
          <li>Доставка и оплата</li>
          <div className={`dashedLineVert ${styles.headerTop__list_line}`}></div>
          <li>Возврат</li>
          <div className={`dashedLineVert ${styles.headerTop__list_line}`}></div>
          <li>Контакты</li>
        </ul>
      </div>
    </ContentWrapper>
  )
}

export default HeaderTop