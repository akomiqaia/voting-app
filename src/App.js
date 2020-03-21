import React from "react"
import countries from './seed'
class Holidays extends React.Component {
  state = {
    countries: [],
  }
  componentDidMount() {
    this.setState({countries: countries})
  }
  handleCountryUpVote = (countryId) => {
    const nextCountry = this.state.countries.map((country) => {
      if (countryId === country.id) {
        return Object.assign({}, country, {
          votes: country.votes + 1
        }) 
      } else {
        return country
      }
    })
    this.setState ({
      countries: nextCountry
    })
  }
    render () {
    const sortedCountries = this.state.countries.sort((a,b) => b.votes - a.votes)
    const countryOptions = sortedCountries.map(country => (
      <HolidayDestinations
         key={'country ' + country.id}
         id={country.id}
         userName={country.userName}
         title={country.title}
         description={country.description}
         url={country.url}
         votes={country.votes}
         submitterAvatarUrl={country.submitterAvatarUrl}
         productImageUrl={country.productImageUrl}
         onVote={this.handleCountryUpVote}
        />
    ));
    return (
      <div className='ui unstackable items'>
        {countryOptions}
      </div>
    )
  }
}

class HolidayDestinations extends React.Component {
  
  handleUpVote = () => this.props.onVote(this.props.id)

  render () {
    return (
      <div className="item">
        <div className='image'>
          <img alt="Georgia" src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='ui labeled button' tabIndex="0" onClick={this.handleUpVote}>
            <button className="ui basic blue button">Happy to go!</button>
            <a class="ui basic left pointing blue label">
            {this.props.votes}
            </a>
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
            {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submited by:</span>
            <img
              alt=""
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
            <span>{this.props.userName}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Holidays;
