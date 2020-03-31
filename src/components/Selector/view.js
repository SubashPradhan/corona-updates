import React from 'react'
import ReactFlagsSelect from 'react-flags-select';
import '../../styles/countryData.css'
import 'react-flags-select/css/react-flags-select.css';

export default function view(props) {
  const { onSelectFlag} = props
  return <div className='container'>
    <ReactFlagsSelect
      refs="userFlag"
      className='selector'
      searchable={true}
      searchPlaceholder="Search for a country"
      onSelect={countryCode => onSelectFlag(countryCode)}
      selectedSize={22}
      optionsSize={15}
    />
  </div>

}

