import React, {FC} from 'react'
import styles from './Path.module.scss'
import {IPaths} from '../../types/path'
import {Link} from 'react-router-dom'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'
import {PaginationArrowIcon} from '../svg'

interface PathProps {
  paths?: IPaths[]
}

const Paths: FC<PathProps> = ({paths}) => {
  return (
    <div className={styles.path}>
      <div className={styles.path__full}>
        <Link className={`${styles.path__link} ${!paths && styles.path__currentLink}`}
              to={COSMETICS_HYGIENE_ROUTE}>Главная</Link>
        {
          paths
            ? paths.map((path, id) =>
              <div className={styles.path__block} key={id}>
                <div className={`dashedLineVert ${styles.path__line}`}></div>
                <Link to={path.link}
                      className={`${styles.path__link} ${id === paths.length - 1 && styles.path__currentLink}`}>{path.name}</Link>
              </div>
            )
            : ''
        }
      </div>
      {
        paths && <Link to={paths.length > 2 ? paths[paths.length - 2].link : COSMETICS_HYGIENE_ROUTE} className={styles.path__back}>
          <div className={styles.path__backButton}><PaginationArrowIcon/></div>
          <span>Назад</span>
        </Link>
      }

    </div>
  )
}

export default Paths