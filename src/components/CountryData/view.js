import React from 'react'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import '../../styles/countryData.css'
import '../../styles/home.css'
import AnimatedNumber from 'animated-number-react'

export default function view(props) {
  const { onSubmit, onSelectFlag, countryData, select } = props
  const formatValue = value => `${Number(value).toFixed(0)}`;
  
  const country = countryData.map(co => <div>
    <h1>Country: {co.country}</h1>
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
    return <div className='container selector'>
      <ReactFlagsSelect
        searchable={true}
        searchPlaceholder="Search for a country"
        onSelect={onSelectFlag}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  } else {
    return <div className='container'>
      {/* <h1>Country:{country}</h1> */}
      <div>
        {country}
      </div>

    </div>
  }
}

