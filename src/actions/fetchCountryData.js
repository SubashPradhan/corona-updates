import { countryDataUrl } from '../constants'
import request from 'superagent'

export const COUNTRY_DATA_FETCHED = 'COUNTRY_DATA_FETCHED'

const fetchCountryDataPayload = payload => ({
  type: COUNTRY_DATA_FETCHED,
  payload
})

export const fetchCountryData = countryCode => async (dispatch, getState) => {
  const state = getState()
  const {countryData} = state
  try {
    if (!countryData.length){
      const response = await request
      .get(`${countryDataUrl}/${countryCode}`)
      const action = await fetchCountryDataPayload(response.body.data.latest_data)
      return dispatch(action)
    }
  } catch (error) {
    console.error(error)
  }
}