import { combineReducers } from 'redux'
import data from './fetchData'
import countryData from './fetchCountryData'
import news from './fetchNews'
import newUpdates from './fetchNewUpdates'

export default combineReducers({
  data,
  countryData,
  news,
  newUpdates
})