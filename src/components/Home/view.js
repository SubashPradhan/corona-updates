import React from 'react'
import '../../styles/home.css'

export default function view(props) {
  const { data } = props
  const totals = data.map(numbers =>
    <div key={data.length} align='center'>
      <div className='row'>
        <div className='numbers col-6' >
          Global Confirmed Number : <p> {numbers.confirmed}</p>
        </div>

        <div className='numbers col-6'>
          Global Recovered Number :
          <p>{numbers.recovered}</p>
        </div>
      </div>

      <div className='row'>
        <div className='numbers col-12'>
          Global Deaths:<p> {numbers.deaths}</p>
        </div>
      </div>
    </div>
  )
  return <div className='container'>
    <h1 align='center'>COVID- 19 (CORONA) UPDATES</h1>
    <div className='numbers-container'>
      {totals}
    </div>
  </div>
}