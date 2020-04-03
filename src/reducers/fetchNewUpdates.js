import {NEW_UPDATES_FETCHED} from '../actions/fetchNewUpdates'

export default function (state= [], action={}){
  switch (action.type){
    case NEW_UPDATES_FETCHED:
      return action.payload
    default:
      return state
  }
}