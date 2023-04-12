import {renderTestApp} from './helpers/renderTestApp'
import Paths from '../components/Paths/Paths'
import {screen} from '@testing-library/react'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: '/cosmeticsHygiene/97450200003'
  })
}));

describe('path tests', () => {
  test('path test', () => {
    renderTestApp(<Paths/>)
    expect(screen.getByTestId('paths')).toMatchSnapshot()
  })
})