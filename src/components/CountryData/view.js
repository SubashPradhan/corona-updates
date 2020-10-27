import React from 'react'
import '../../styles/countryData.css'
import '../../styles/home.css'
import AnimatedNumber from 'animated-number-react'
import GlobeData from '../GlobeData'

export default function view(props) {
  const { countryData, select } = props
  
  const formatValue = (value) => {
    let number = Number(value).toFixed(0);
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (select) {
    return <div className='data-container container'>
      <div className='numbers-container'>
        <div className='row'>
          <div className='numbers col-lg-4 col-12 confirmed' >
            Total Confirmed:
          <p className='total'>
              <AnimatedNumber
                value={countryData.confirmed}
                formatValue={formatValue}
              />
            </p>
          </div>

          <div className='numbers col-lg-4 col-12 recovered'>
            Total Recovered:
          <p className='total'>
              <AnimatedNumber
                value={countryData.recovered}
                formatValue={formatValue}
              />
            </p>
          </div>

          <div className='numbers col-lg-4 col-12 deaths'>
            Total Deaths:
          <p className='total'>
              <AnimatedNumber
                value={countryData.deaths}
                formatValue={formatValue}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  } else {
    return <GlobeData />
  }
}
