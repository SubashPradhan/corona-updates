import { combineReducers } from 'redux'
import data from './fetchData'
import countryData from './fetchCountryData'

export default combineReducers({
  data,
  countryData
})