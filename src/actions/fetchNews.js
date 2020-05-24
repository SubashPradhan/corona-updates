import request from 'superagent'
import {newsUrl} from '../constants'

export const FETCH_NEWS = 'FETCH_NEWS'

const fetchNewsPayload = payload => ({
  type: FETCH_NEWS,
  payload
})

export const fetchNews = () => async (dispatch, getState) => {
  // const state = getState()
  // const { news } = state
  try {
    // if (!news.length) {
      const response = await request(newsUrl)
      const action = await fetchNewsPayload(response.body)
      return dispatch(action)
    // }
  } catch (error) {
    console.log(error)
  }
} 