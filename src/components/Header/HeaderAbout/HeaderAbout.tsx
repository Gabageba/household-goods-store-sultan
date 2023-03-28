import React, {FC} from 'react'
import styles from './HeaderAbout.module.scss'
import ContentWrapper from '../../ContentWrapper/ContentWrapper'
import Contacts from './Contacts/Contacts'
import List from './List/List'

interface HeaderAboutProps {
  isBurgerActive: boolean
}

const HeaderAbout: FC<HeaderAboutProps> = ({isBurgerActive}) => {
  return (
    <div className={`${styles.background} ${isBurgerActive ? styles.background__active : ''}`}>
      <div className={styles.headerAbout}>
        <ContentWrapper>
          <div className={styles.headerAbout__content}>
            <Contacts />
            <div className={styles.headerAbout__dashedUnderline}></div>
            <List />
          </div>
        </ContentWrapper>
      </div>
    </div>

  )
}

export default HeaderAbout