import request from 'superagent'
import { baseUrl } from '../constants'

export const DATA_FETCHED = 'DATA_FETCHED'

const fetchDataPayload = payload => ({
  type: DATA_FETCHED,
  payload
})

export const fetchData = () => async (dispatch, getState) => {
  const state = getState()
  const { data } = state
  if (!data.length) {
    const response = await request
      .get(`${baseUrl}/totals`)
      .set({
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "4b282c7b64mshc70565ba6bd45a0p11a355jsn26a1fb48ae46"
      })
    const action = await fetchDataPayload(response.body)
    console.log(response.body)
    return dispatch(action)
  }
}