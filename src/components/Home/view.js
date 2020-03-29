import React from 'react'

export default function view(props) {
  const { data } = props
  const totals = data.map(numbers =>
    <div key={data.length}>
      <p>Global Confirmed Number : {numbers.confirmed}</p>
      <p>Global Recovered Number : {numbers.recovered}</p>
      <p>Global: {numbers.deaths}</p>
    </div>
  )
  return <div align='center'>
      <h1>CORONA UPDATES</h1>
    {totals}
  </div>
}