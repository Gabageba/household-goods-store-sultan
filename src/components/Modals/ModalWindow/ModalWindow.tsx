import React, {Dispatch, FC, PropsWithChildren, SetStateAction} from 'react'
import styles from './ModalWindow.module.scss'
import {CloseSvg} from '../../svg'

interface ModalWindowProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
}

const ModalWindow: FC<PropsWithChildren<ModalWindowProps>> = ({setModalActive, children}) => {
  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindow__content}>
        <div onClick={() => setModalActive(false)}><CloseSvg/></div>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow