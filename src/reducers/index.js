import { combineReducers } from 'redux'
import data from './fetchData'
import countryData from './fetchCountryData'
import news from './fetchNews'

export default combineReducers({
  data,
  countryData,
  news
})