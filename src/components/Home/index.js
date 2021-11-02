import {Component} from 'react'

import Cookies from 'js-cookie'
import Header from '../Header'
import carousal1 from '../../images/Carousal 1.jpg'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class Home extends Component {
  state = {activeOptionId: 'Home', activeSortById: 'Highest'}

  componentDidMount() {
    this.getCarousalImages()
    // this.getPopularRestaurants()
  }

  getCarousalImages = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const imagesData = await response.json()

    console.log(imagesData.offers)
  }

  onChangeSortBy = event => {
    this.setState({activeSortById: event.target.value})
  }

  render() {
    const {activeSortById, activeOptionId} = this.state
    return (
      <>
        <Header activeOptionId={activeOptionId} />
        <div className="carousal-container">
          <img src={carousal1} alt="carousal" />
        </div>
        <div className="popular-restaurants-container">
          <h1 className="heading">Popular Restaurants</h1>
          <div className="sort-by-container">
            <h1 className="inner-heading">
              Select Your favourite restaurant special dish and make your day
              happy...
            </h1>
            <select
              className="sort-by-select"
              value={activeSortById}
              onChange={this.onChangeSortBy}
            >
              {sortByOptions.map(eachOption => (
                <option
                  key={eachOption.id}
                  value={eachOption.value}
                  className="select-option"
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
          <hr className="horizontal-line" />
        </div>
      </>
    )
  }
}

export default Home
