import React, {FC} from 'react'
import styles from './Path.module.scss'
import {IPaths} from '../../types/path'
import {Link} from 'react-router-dom'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'

interface PathProps {
  paths?: IPaths[]
}

const Paths: FC<PathProps> = ({paths}) => {
  return (
    <div className={styles.path}>
      <Link className={`${styles.path__link} ${!paths && styles.path__currentLink}`} to={COSMETICS_HYGIENE_ROUTE}>Главная</Link>
      {
        paths
          ? paths.map((path, id) =>
            <div className={styles.path__block}>
              <div className={`dashedLineVert ${styles.path__line}`}></div>
              <Link to={path.link} className={`${styles.path__link} ${id === paths.length - 1 && styles.path__currentLink}`}>{path.name}</Link>
            </div>
          )
          : ''
      }
    </div>
  )
}

export default Paths