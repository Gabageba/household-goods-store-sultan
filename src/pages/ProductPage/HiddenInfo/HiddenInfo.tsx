import React, {FC, PropsWithChildren, useState} from 'react'
import styles from './HiddenInfo.module.scss'
import {MoreIcon} from '../../../components/svg'

interface HiddenInfoProps {
  title: string
}

const HiddenInfo: FC<PropsWithChildren<HiddenInfoProps>> = ({title, children}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <div className={styles.hiddenInfo}>
      <div className={`${styles.hiddenInfo__title} ${isVisible ? styles.hiddenInfo__title_active : ''}`} onClick={() => setIsVisible(prevState => !prevState)}>
        <h3>{title}</h3>
        <MoreIcon />
      </div>

      <div className={`${styles.hiddenInfo__content} ${isVisible ? styles.hiddenInfo__content_active : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default HiddenInfo