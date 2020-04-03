import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../styles/footer.css'
import '../../styles/home.css'

export default function view(props) {
  const { newUpdates } = props
  console.log(newUpdates.deaths)
  return <Carousel
   className='footer'
   indicators={false}
   controls={false}
   >
    <Carousel.Item>
      <div className='footer-text confirmed'>New Confirmed Cases: {newUpdates.confirmed}</div>
    </Carousel.Item>

    <Carousel.Item>
      <div className='footer-text recovered'>New Recovered Updates: {newUpdates.recovered}</div>
    </Carousel.Item>

    <Carousel.Item>
      <div className='footer-text deaths'>New Confirmed Deaths: {newUpdates.deaths}</div>
    </Carousel.Item>
  </Carousel>
}