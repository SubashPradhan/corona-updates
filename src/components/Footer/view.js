import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../styles/footer.css'
import '../../styles/home.css'

export default function view(props) {
  const formatValue = (value) => {
    let number = Number(value).toFixed(0);
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { newUpdates } = props
  let newConfirmedCases = formatValue(newUpdates.new_confirmed);
  let newRecoveredCases = formatValue(newUpdates.new_recovered);
  let newDeathCases = formatValue(newUpdates.new_deaths);

  return <Carousel
    className='footer'
    indicators={false}
    controls={false}
    interval={2500}
  >
    <Carousel.Item>
      <div className='footer-text confirmed'>New Confirmed Cases: {newConfirmedCases}</div>
    </Carousel.Item>

    <Carousel.Item>
      <div className='footer-text recovered'>New Recovered Updates: {newRecoveredCases}</div>
    </Carousel.Item>

    <Carousel.Item>
      <div className='footer-text deaths'>New Confirmed Deaths: {newDeathCases}</div>
    </Carousel.Item>
  </Carousel>
}