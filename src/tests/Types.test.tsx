import * as hook from '../hooks/useTypedSelector'
import {renderTestApp} from './helpers/renderTestApp'
import {screen} from '@testing-library/react'
import Types from '../components/Filters/Types/Types'
import {COSMETICS_HYGIENE_TYPES} from '../utils/consts'
import React from 'react'
import {FilterTypes} from '../types/filter'
import styles from '../components/Filters/Types/Types.module.scss'


describe('Types test', () => {
  test('active className test',  () => {
    renderTestApp( <Types types={COSMETICS_HYGIENE_TYPES} setSelectedType={() => {}} selectedType={[FilterTypes.bodyCare]}/>)

    expect(screen.getAllByTestId('type')[0]).toHaveClass(styles.types__item_active)
    expect(screen.getAllByTestId('type')[1]).not.toHaveClass(styles.types__item_active)
  })

  test('unActive className test',  () => {
    renderTestApp( <Types types={COSMETICS_HYGIENE_TYPES} setSelectedType={() => {}} selectedType={[FilterTypes.bodyCare]}/>)

    expect(screen.getAllByTestId('type')[1]).not.toHaveClass(styles.types__item_active)
  })
})