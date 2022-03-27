import {Component} from 'react'
import {GrFormAdd} from 'react-icons/gr'
import {BiVideo, BiFilter} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoGridSharp} from 'react-icons/io5'

import Popup from 'reactjs-popup'

import CardDetails from '../cardDetails'
import './index.css'

const list = [
  {
    name: 'Mixmax',
    budgetName: 'Software subscription',
    ownerId: 1,
    spent: {
      value: 100,
      currency: 'SGD',
    },
    availableToSpend: {
      value: 1000,
      currency: 'SGD',
    },
    cardType: 'burner',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
  {
    name: 'Mixmax',
    budgetName: 'Software subscription',
    ownerId: 2,
    spent: {
      value: 100,
      currency: 'SGD',
    },
    availableToSpend: {
      value: 1000,
      currency: 'SGD',
    },
    cardType: 'burner',
    expiry: '9 feb',
    limit: 100,
    status: 'active',
  },
]

class Home extends Component {
  state = {
    cardDetails: list,
  }

   componentDidMount() {
    this.card()
  }

   card = async () => {
    const api = 'https://vamsi'
    const options = {
      method: 'GET',
    }
    const response = await fetch(api, options)
    console.log(response)
    if (response.ok === true) {
      const topRatedData = await response.json()
      const updatedData = topRatedData.books.map(top => ({
        name: top.name,
        budgetName: top.budget_name,
        ownerId: top.owner_id,
        title: top.title,
        spent: top.spent,
        availableToSpend: top.available_to_spend,
        cardType: top.card_type,
        expiry: top.expiry,
        limit: top.limit,
        status: top.status,
      }))
      this.setState({
        cardDetails: updatedData,
      })
    } else {
      this.setState({
        cardDetails: list,
      })
    }
  } 

  popup = () => (
    <div>
      <h4>Popup - GeeksforGeeks</h4>
      <Popup
        trigger={<button type="button">vamsi</button>}
        position="right center"
      >
        <div className="popup-container">
          <p>type</p>
          <input type="checkbox" id="sub" />
          <label htmlFor="sub">sub</label>
          <input type="checkbox" id="burner" />
          <label htmlFor="burner">burner</label>
          <label htmlFor="select">cardholder</label>
          <select id="select">
            <option>select cardholder</option>
          </select>
          <button type="button">Apply</button>
          <button type="button">clear</button>
        </div>
      </Popup>
    </div>
  )

  onClickButton = () => {
    this.setState(prevState => ({
      isClick: !prevState.isClick,
    }))
  }

  render() {
    const {cardDetails} = this.state
    return (
      <div>
        <div className="main-container">
          <div className="heading-container">
            <h1 className="main-heading">Virtual cards</h1>
            <div className="video-container">
              <BiVideo />
              <p> Learn more</p>
            </div>
          </div>
          <div>
            <p className="add-container">
              <GrFormAdd /> Virtual cards
            </p>
          </div>
        </div>
        <div className="select-container">
          <div className="text-container">
            <p className="text">Your</p>
            <p className="text">All</p>
            <p className="text">Block</p>
          </div>
          <div>
            <IoGridSharp className="icon" />
            <GiHamburgerMenu className="icon" />
          </div>
        </div>
        <hr />
        <div className="icon-container">
          <BsSearch />
          <Popup
            trigger={
              <button type="button" className="filter-container">
                <BiFilter />
                <p>Filter</p>
              </button>
            }
            position="left center"
          >
            <div className="popup-container">
              <p>Filters</p>
              <hr />
              <p>type</p>
              <div>
                <input type="checkbox" id="sub" />
                <label htmlFor="sub">subscription</label>
                <input type="checkbox" id="burner" />
                <label htmlFor="burner">Burner</label>
              </div>
              <label htmlFor="select">cardholder</label>
              <select id="select">
                <option>select cardholder</option>
              </select>
              <div>
                <button className="button red-btn" type="button">
                  Apply
                </button>
                <button type="button" className="button">
                  clear
                </button>
              </div>
            </div>
          </Popup>
        </div>
        <ul className="list-container">
          {cardDetails.map(each => (
            <CardDetails details={each} key={each.ownerId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
