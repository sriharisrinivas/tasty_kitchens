import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import logo from '../../images/Group 7420.png'
import websiteLoginImage from '../../images/Rectangle 1456.png'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSubmitSuccess = data => {
    console.log(data.jwt_token)
    const {history} = this.props
    Cookies.set('jwt_token', data.jwt_token, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  onSubmitFailure = data => {
    console.log(data)
    this.setState({errorMsg: data.error_msg, showSubmitError: true})
  }

  onClickSubmit = async event => {
    const {username, password} = this.state
    const userDetails = {username, password}
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data)
    } else {
      this.onSubmitFailure(data)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, showSubmitError} = this.state
    return (
      <div className="login-container">
        <div className="left-side-container">
          <form className="form-container" onSubmit={this.onClickSubmit}>
            <div className="logo-container">
              <img src={logo} alt="website logo" className="logo" />
            </div>
            <h1 className="brand-heading">Tasty Kitchens</h1>
            <h1 className="login-heading">Login</h1>
            <div className="input-label-container">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                className="input-box"
                id="username"
                type="text"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-label-container">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input-box"
                id="password"
                type="password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
        <div className="right-side-container">
          <img src={websiteLoginImage} alt="website login" />
        </div>
      </div>
    )
  }
}

export default Login
