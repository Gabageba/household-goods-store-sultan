import React, {FC} from 'react'
import address from '../../../../assets/icons/address.svg'
import email from '../../../../assets/icons/email.svg'
import phone from '../../../../assets/icons/phone.svg'
import phoneFilled from '../../../../assets/icons/phone-filled.svg'
import styles from './Contacts.module.scss'

const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__info}>
        <img width={20} src={address} alt="address"/>
        <div>
          <div className={styles.contacts__mainInfo}>г. Кокчетав, ул. Ж. Ташенова 129Б</div>
          <div className={styles.contacts__subInfo}>(Рынок Восточный)</div>
        </div>
      </div>
      <div className={`dashedLineVert ${styles.contacts__line}`}></div>
      <div className={styles.contacts__info}>
        <img width={20} src={email} alt="email"/>
        <div>
          <div className={styles.contacts__mainInfo}>opt.sultan@mail.ru</div>
          <div className={styles.contacts__subInfo}>На связи в любое время</div>
        </div>
      </div>
      <div className={styles.contacts__call}>
        <div className={styles.contacts__info}>
          <img width={20} src={phone} alt="phone"/>
          <div>
            <div className={styles.contacts__mainInfo}>Отдел продаж</div>
            <div className={styles.contacts__subInfo}>+7 (777) 490-00-91</div>
          </div>
        </div>
        <div className={styles.contacts__workTime}>время работы: 9:00-20:00</div>
        <div className={styles.contacts__requestCall}>
          <div className={styles.contacts__requestCall_button}>
            <img width={10} height={10} src={phoneFilled} alt="phone"/>
          </div>
          <a href={'tel: +77774900091'}  className={styles.contacts__requestCall_text}>Заказать звонок</a>
        </div>
      </div>

    </div>
  )
}

export default Contacts