import React, {FC, useState} from 'react'
import {IProduct} from '../../types/products'
import styles from './AdminCard.module.scss'
import noImage from '../../assets/img/no-image.jpg'
import ProductSize from '../ProductSize/ProductSize'
import {COSMETICS_HYGIENE_ROUTE} from '../../utils/consts'
import {useNavigate} from 'react-router-dom'
import deleteIcon from '../../assets/icons/delete.svg'
import editIcon from '../../assets/icons/edit.svg'
import {formatPrice} from '../../utils/functions'
import {useActions} from '../../hooks/useActions'
import AddCard from '../AddCard/AddCard'

interface AdminCardProps {
  product: IProduct
}

const AdminCard: FC<AdminCardProps> = ({product}) => {
  const navigate = useNavigate()
  const {deleteBasketItem, deleteProduct} = useActions()
  const [isCardEdit, setIsCardEdit] = useState<boolean>(false)

  const deleteItem = () => {
    deleteBasketItem(product.id)
    deleteProduct(product.id)
  }

  return (
    <>
      {
        isCardEdit
          ? <AddCard product={product} setIsEdit={setIsCardEdit}/>
          : <div className={styles.adminCard}>
            <div className={styles.adminCard__info}>
              <img width={200} src={product.url || noImage} alt={product.brand}/>
              <div className={styles.info}>
                <h2 onClick={() => navigate(`${COSMETICS_HYGIENE_ROUTE}/${product.barcode}`)}>{product.name}</h2>
                <ProductSize sizeType={product.sizeType} size={product.size}/>
                <div className={styles.adminCard__price}>{formatPrice(product.price)} ₸</div>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttons__item}><img src={editIcon} alt="edit" onClick={() => setIsCardEdit(true)}/>
              </div>
              <div className={`dashedLineVert ${styles.basketCard__line}`}></div>
              <div className={styles.buttons__item} onClick={deleteItem}><img src={deleteIcon} alt="delete"/></div>
            </div>
          </div>
      }
    </>
  )
}

export default AdminCard