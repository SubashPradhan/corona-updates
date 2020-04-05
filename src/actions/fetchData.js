import request from 'superagent'
import { baseUrl } from '../constants'

export const DATA_FETCHED = 'DATA_FETCHED'

const fetchDataPayload = payload => ({
  type: DATA_FETCHED,
  payload
})

export const fetchData = () => async (dispatch) => {
  const response = await request(`${baseUrl}`)
  const action = await fetchDataPayload(response.body)
  return dispatch(action)
}