import React, {Dispatch, FC, SetStateAction} from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
import completeOrder from '../../../assets/icons/complete-order.svg'
import styles from './OrderModalWindow.module.scss'

interface OrderModalWindowProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
  title: string
  text: string
}

const OrderModalWindow: FC<OrderModalWindowProps> = ({setModalActive, title, text}) => {
  return (
    <ModalWindow setModalActive={setModalActive}>
      <div className={styles.orderModalWindow}>
        <div className={styles.orderModalWindow__icon}>
          <img src={completeOrder} alt=""/>
        </div>
        <h2>{title}</h2>
        <div className={styles.orderModalWindow__text}>{text}</div>
      </div>
    </ModalWindow>
  )
}

export default OrderModalWindow