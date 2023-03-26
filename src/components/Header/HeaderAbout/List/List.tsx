import React, {FC} from 'react'
import styles from './List.module.scss'
import download from '../../../../assets/icons/download.svg'

const List: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Меню сайта:</h1>
      <ul className={styles.list}>
        <li>О компании</li>
        <div className={`dashedLineVert ${styles.list__line}`}></div>
        <li>Доставка и оплата</li>
        <div className={`dashedLineVert ${styles.list__line}`}></div>
        <li>Возврат</li>
        <div className={`dashedLineVert ${styles.list__line}`}></div>
        <li>Контакты</li>
      </ul>
      <div className={`button ${styles.list__priceList}`}>
        <span>Прайс-лист</span>
        <img width={17} src={download} alt="download"/>
      </div>
    </div>

  )
}

export default List