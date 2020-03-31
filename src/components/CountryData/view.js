import React from 'react'
import '../../styles/countryData.css'
import '../../styles/home.css'
import AnimatedNumber from 'animated-number-react'
import GlobeData from '../GlobeData'

export default function view(props) {
  const { countryData, select } = props
  const formatValue = value => `${Number(value).toFixed(0)}`;

  const country = countryData.map((co, i) => <div key={i}>
    <div className='row'>
      <div className='numbers col-lg-4 col-12 confirmed' >
        Total Confirmed:
          <p className='total'>
          <AnimatedNumber
            value={co.confirmed}
            formatValue={formatValue}
          />
        </p>
      </div>

      <div className='numbers col-lg-4 col-12 recovered'>
        Total Recovered:
          <p className='total'>
          <AnimatedNumber
            value={co.recovered}
            formatValue={formatValue}
          />
        </p>
      </div>

      <div className='numbers col-lg-4 col-12 deaths'>
        Total Deaths:
          <p className='total'>
          <AnimatedNumber
            value={co.deaths}
            formatValue={formatValue}
          />
        </p>
      </div>
    </div>
  </div>)

  if (select) {
    return <div className='container'>
      <div className='numbers-container'>
        {country}
      </div>
    </div>
  } else {
    return <GlobeData />
  }
}

