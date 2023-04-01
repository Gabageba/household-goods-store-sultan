import React, {FC} from 'react'
import styles from './InfoItem.module.scss'

interface InfoItemProps {
  title: string
  info: string | string[] | number
}

const InfoItem: FC<InfoItemProps> = ({info, title}) => {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoItem__title}>{title}: </span>
      <span className={styles.infoItem__info}>{typeof info === 'object' ? info.join(', ') : info}</span>
    </div>
  )
}

export default InfoItem