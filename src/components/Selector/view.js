import React from 'react'
import ReactFlagsSelect from 'react-flags-select';
import '../../styles/countryData.css'
import 'react-flags-select/css/react-flags-select.css';
import '../../styles/countryData.css'
import '../../styles/home.css'

export default function view(props) {
  const { onSelectFlag} = props
  return <div className='container'>
    <ReactFlagsSelect
      className='selector'
      searchable={true}
      searchPlaceholder="Search for a country"
      onSelect={onSelectFlag}
    />
  </div>

}

