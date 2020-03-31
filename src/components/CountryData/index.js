import React, { Component } from 'react'
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import View from './view'
import {countries} from 'country-data';

class CountryData extends Component {
  state = {country: null, select: true}

  onSelectFlag = async (countryCode) => {
    const updatedCountry = await countries[countryCode].name
    await this.setState({
      country: updatedCountry,
      select: false
    })
    this.props.fetchCountryData(this.state.country)
  }

  render() {
    return <div>
    <View
      select={this.state.select}
      countryData={this.props.countryData}
      onSelectFlag={this.onSelectFlag}
    />
    </div>
  }
}
const mapStateToProps = state => {
  return {
    countryData: state.countryData
  }
}


export default connect(mapStateToProps, {fetchCountryData })(CountryData)
