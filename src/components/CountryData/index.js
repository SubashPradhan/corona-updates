import React, { Component } from 'react'
import { fetchCountryData } from '../../actions/fetchCountryData'
import { connect } from 'react-redux'
import View from './view'
import {countries} from 'country-data';

class CountryData extends Component {
  render() {
    return <View/>
  }
}


export default CountryData
