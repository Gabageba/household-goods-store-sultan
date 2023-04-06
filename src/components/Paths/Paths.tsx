import React, {FC, useEffect, useState} from 'react'
import styles from './Path.module.scss'
import {Link, useLocation} from 'react-router-dom'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'
import {PaginationArrowIcon} from '../svg'
import {publicRoutes} from '../../routes/routes'
import {IPaths} from '../../types/path'
import {getProduct} from '../../api/productsApi'


const Paths: FC = () => {
  const location = useLocation()
  const [paths, setPaths] = useState<IPaths[]>([])

  useEffect(() => {
    setPaths([])
    location.pathname.split('/').forEach(path => {
      publicRoutes.forEach(route => {
        if (route.path === `/${path}`) {
          setPaths(prevState => [...prevState, {link: route.path, name: route.name}])
        }
      })

      getProduct(path).then(product => {
        if (product) {
          setPaths(prevState => [...prevState, {
            link: `${COSMETICS_HYGIENE_ROUTE}/${product.barcode}`,
            name: product.name
          }])
        }
      })
    })
  }, [])

  return (
    <div className={styles.path}>
      <div className={styles.path__full}>
        <Link className={`${styles.path__link} ${!paths && styles.path__currentLink}`}
              to={COSMETICS_HYGIENE_ROUTE}>Главная</Link>
        {
          paths.map((path, id) =>
            <div className={styles.path__block} key={id}>
              <div className={`dashedLineVert ${styles.path__line}`}></div>
              <Link to={path.link}
                    className={`${styles.path__link} ${id === paths.length - 1 && styles.path__currentLink}`}>
                {path.name}
              </Link>
            </div>
          )
        }
      </div>
      {
        paths && <Link to={paths.length > 2 ? paths[paths.length - 2].link : COSMETICS_HYGIENE_ROUTE}
                       className={styles.path__back}>
          <div className={styles.path__backButton}>
            <PaginationArrowIcon/>
          </div>
          <span>Назад</span>
        </Link>
      }

    </div>
  )
}

export default Paths