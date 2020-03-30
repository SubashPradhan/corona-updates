import { baseUrl } from '../constants'
import request from 'superagent'

export const COUNTRY_DATA_FETCHED = 'COUNTRY_DATA_FETCHED'

const fetchCountryDataPayload = payload => ({
  type: COUNTRY_DATA_FETCHED,
  payload
})

export const fetchCountryData = countryName => async (dispatch, getState) => {
  const state = getState()
  const { countryData } = state
  if (!countryData.length) {
    const response = await request
      .get(`${baseUrl}/country`)
      .query({"name": `${countryName}`})
      .set({
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "4b282c7b64mshc70565ba6bd45a0p11a355jsn26a1fb48ae46"
      })
    const action = await fetchCountryDataPayload(response.body)
    return dispatch(action)
  }
}