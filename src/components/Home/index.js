import {Component} from 'react'
import Header from '../Header'
import carousal1 from '../../images/Carousal 1.jpg'

import './index.css'

class Home extends Component {
  render() {
    const {sortByOptions} = this.props
    console.log(sortByOptions)
    return (
      <>
        <Header />
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
            <select>
              <option>d</option>
            </select>
          </div>
        </div>
      </>
    )
  }
}

export default Home
