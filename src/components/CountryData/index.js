import React, { Component } from 'react'
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import View from './view'
import {countries} from 'country-data';


class CountryData extends Component {
  state = {country: null, select: true}

  onSelectFlag = (countryCode) => {
    const updatedCountry = countries[countryCode].name
    this.setState({
      country: updatedCountry,
    })
  }

  onSubmit = () => {
    this.props.fetchCountryData(this.state.country)
    this.setState({
      select: false
    })
  }

  render() {
    console.log("countryData", this.props)
    return <View
      select={this.state.select}
      countryData={this.props.countryData}
      onSubmit={this.onSubmit}
      onSelectFlag={this.onSelectFlag}
    />
  }
}
const mapStateToProps = state => {
  return {
    countryData: state.countryData
  }
}


export default connect(mapStateToProps, {fetchCountryData })(CountryData)
