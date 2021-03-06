import React from 'react'
import '../../styles/home.css'
import '../../styles/loading.css'
import AnimatedNumber from "animated-number-react";

export default function view(props) {
  const { data, isLoading } = props

  const formatValue = (value) => {
    if (!value) {
      return <span className='loading'></span>
    }
    let number = Number(value).toFixed(0);
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (!isLoading) {
    return <div className='data-container container'>
      <div className='numbers-container'>
        <div className='row'>
          <div className='numbers col-lg-4 col-12 confirmed' >
            Global Confirmed:
          <p className='total'>
              <AnimatedNumber
                value={data.cases}
                formatValue={formatValue}
              />
            </p>
          </div>

          <div className='numbers col-lg-4 col-12 recovered'>
            Global Recovered:
          <p className='total'>
              <AnimatedNumber
                formatValue={formatValue}
                value={data.recovered}
              />
            </p>
          </div>

          <div className='numbers col-lg-4 col-12 deaths'>
            Global Deaths:
          <p className='total'>
              <AnimatedNumber
                value={data.deaths}
                formatValue={formatValue}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  } else {
    return <div className='loading pageLoading'></div>
  }
}