import React, { Component } from 'react'
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import View from './view'
import { countries } from 'country-data';
import CountryData from '../CountryData/view'

class Selector extends Component {
  state = { country: null, select: false }

  onSelectFlag = async (countryCode, e) => {
    const updatedCountry = await countries[countryCode].name
    await this.setState({
      country: updatedCountry,
      select: true
    })
    this.props.fetchCountryData(this.state.country)
  }

  render() {
    return <div>
      <View
        select={this.state.select}
        onSelectFlag={this.onSelectFlag}
        onChange={this.onchange} />
      <CountryData
        countryData={this.props.countryData}
        select={this.state.select} />
    </div>
  }
}
const mapStateToProps = state => {
  return {
    countryData: state.countryData
  }
}

export default connect(mapStateToProps, { fetchCountryData })(Selector)
