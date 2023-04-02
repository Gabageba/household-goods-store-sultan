import React, {Dispatch, FC, SetStateAction, useEffect} from 'react'
import styles from './PopUpBlock.module.scss'

interface PopUpBlockProps {
  text: string
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const PopUpBlock: FC<PopUpBlockProps> = ({text, setIsVisible, isVisible}) => {

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }
  }, [isVisible])

  return (
    <div className={`${styles.popUpBlock}`} style={{display: isVisible ? 'block' : 'none'}}>
      {text}
    </div>
  )
}

export default PopUpBlock