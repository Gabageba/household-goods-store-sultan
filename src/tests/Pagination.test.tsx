
import * as hook from '../hooks/useTypedSelector'
import {renderTestApp} from './helpers/renderTestApp'
import Pagination from '../components/Pagination/Pagination'
import {screen} from '@testing-library/react'



describe('Pagination test', () => {
  test('pagination length',  () => {
    jest.spyOn(hook, 'useTypedSelector').mockReturnValue({
      totalCount: 10,
      limit: 3,
      page: 1
    })

    renderTestApp(<Pagination/>)

    expect(screen.getAllByTestId('page')).toHaveLength(4)
  })
})