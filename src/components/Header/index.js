import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import logo from '../../images/Group 7420.png'

const Header = props => {
  const {activeOptionId} = props
  console.log(activeOptionId)
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <img src={logo} alt="website logo" />
      <ul className="unordered-list">
        <li className="list-item">
          <Link className="link-item" to="/">
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link className="link-item" to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <button
            className="logout-button"
            type="button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
