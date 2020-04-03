import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../styles/footer.css'
import '../../styles/home.css'

export default function view(props) {
  const { newUpdates } = props
  return <Carousel
   className='footer'
   indicators={false}
   controls={false}
   interval={2500}
   >
    <Carousel.Item>
      <div className='footer-text confirmed'>New Confirmed Cases: {newUpdates.new_confirmed}</div>
    </Carousel.Item>

    <Carousel.Item>
      <div className='footer-text recovered'>New Recovered Updates: {newUpdates.new_recovered}</div>
    </Carousel.Item>

    <Carousel.Item>
      <div className='footer-text deaths'>New Confirmed Deaths: {newUpdates.new_deaths}</div>
    </Carousel.Item>
  </Carousel>
}