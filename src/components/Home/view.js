import React from 'react'
import '../../styles/home.css'
import AnimatedNumber from "animated-number-react";
import NavBar from '../Navbar'

export default function view(props) {
  const { data } = props
  const formatValue = value => `${Number(value).toFixed(0)}`;

  const totals = data.map(numbers =>
    <div key={data.length}>
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
    <NavBar />
    <div className='container'>
      <h1>COVID- 19 (CORONA) UPDATES</h1>
      <div className='numbers-container'>
        {totals}
      </div>
    </div>
  </div>
}