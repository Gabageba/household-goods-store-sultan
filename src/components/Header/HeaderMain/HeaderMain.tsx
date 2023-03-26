import React, {FC} from 'react'
import ContentWrapper from '../../ContentWrapper/ContentWrapper'
import styles from './HeaderMain.module.scss'
import sultanLogo from '../../../assets/sultanLogo.svg'
import burgerOpen from '../../../assets/icons/burger-open.svg'
import burgerClose from '../../../assets/icons/burger-close.svg'
import ButtonsBlock from './ButtonsBlock/ButtonsBlock'
import SubBlock from './SubBlock/SubBlock'

interface HeaderMainProps {
  isBurgerActive: boolean
  burgerMenuClickHandler: () => void
}

const HeaderMain: FC<HeaderMainProps> = ({burgerMenuClickHandler, isBurgerActive}) => {
  return (
    <>
      <ContentWrapper>
        <div className={styles.headerMain}>
          <div onClick={burgerMenuClickHandler} className={styles.headerMain__burgerMenuButton}>
            <img width={20} src={isBurgerActive ? burgerClose : burgerOpen} alt={isBurgerActive ? 'close' : 'open'}/>
          </div>
          <img width={156} className={styles.headerMain__sultanLogo} src={sultanLogo} alt="sultan logo"/>
          <ButtonsBlock />
          <SubBlock/>
        </div>
      </ContentWrapper>
      <div className={`underline ${styles.underline} ${styles.underline_top}`}></div>
      <div className={`underline ${styles.underline} ${styles.underline_bottom}`}></div>
    </>
  )
}

export default HeaderMain