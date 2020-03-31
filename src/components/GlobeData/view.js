import React from 'react'
import '../../styles/home.css'
import AnimatedNumber from "animated-number-react";

export default function view(props) {
  const { data} = props
  const formatValue = value => `${Number(value).toFixed(0)}`;

  const totals = data.map((numbers, i) =>
    <div key={i}>
      <div className='row'>
        <div className='numbers col-lg-4 col-12 confirmed' >
          Global Confirmed:
          <p className='total'>
            <AnimatedNumber
              value={numbers.confirmed}
              formatValue={formatValue}
            />
          </p>
        </div>

        <div className='numbers col-lg-4 col-12 recovered'>
          Global Recovered:
          <p className='total'>
            <AnimatedNumber
              value={numbers.recovered}
              formatValue={formatValue}
            />
          </p>
        </div>

        <div className='numbers col-lg-4 col-12 deaths'>
          Global Deaths:
          <p className='total'>
            <AnimatedNumber
              value={numbers.deaths}
              formatValue={formatValue}
            />
          </p>
        </div>
      </div>
    </div>
  )
  return <div>
    <div className='data-container container'>
      <div className='numbers-container'>
        {totals}
      </div>
    </div>
  </div>
}