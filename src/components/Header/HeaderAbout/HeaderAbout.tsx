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
    <div className={`${styles.headerAbout} ${isBurgerActive ? styles.headerAbout_active : ''}`}>
      <ContentWrapper>
        <div className={styles.headerAbout__wrapper}>
          <Contacts/>
          <div className={styles.headerAbout__dashedUnderline}></div>
          <List />
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeaderAbout