import {DATA_FETCHED} from '../actions/fetchData'

export default function (state = [], action = {}) {
  switch (action.type){
    case DATA_FETCHED:
      return action.payload
    default:
      return state
  }
}