import request from 'superagent'
import {baseUrl} from '../constants'
export const NEW_UPDATES_FETCHED = 'NEW_UPDATES_FETCHED'

const fetchNewUpdatesPayload = payload => ({
  type: NEW_UPDATES_FETCHED,
  payload
})

export const fetchNewUpdates = () => async(dispatch, getState) => {
  const state = getState()
  const newUpdates = state
  if (!newUpdates.length) {
    const response = await request
      .get(`${baseUrl}`);
    const action = await fetchNewUpdatesPayload(response.body);
    return dispatch(action);
  }
}