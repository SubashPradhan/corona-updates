import {COUNTRY_DATA_FETCHED} from '../actions/fetchCountryData'

export default function(state= [], action= {}){
  switch(action.type){
    case COUNTRY_DATA_FETCHED:
      return action.payload
    default:
      return state
  }
}