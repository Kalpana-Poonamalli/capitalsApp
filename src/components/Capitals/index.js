import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCountry: countryAndCapitalsList[0].id}

  isOptionChange = event => {
    this.setState({activeCountry: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {activeCountry} = this.state
    const capitalCountry = countryAndCapitalsList.filter(
      eachItem => eachItem.id.toLowerCase() === activeCountry.toLowerCase(),
    )
    const capital = capitalCountry[0].country
    console.log(capital)
    return (
      <div className="c-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              value={activeCountry}
              onChange={this.isOptionChange}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  className="option"
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h1 className="head">{capital}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
