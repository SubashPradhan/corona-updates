import React from 'react'
import ReactFlagsSelect from 'react-flags-select';
import '../../styles/countryData.css'
import 'react-flags-select/css/react-flags-select.css';

export default function view(props) {
  const { onSelectFlag, isMobile } = props
  console.log("VERSIONMOBILE", isMobile)
  return <div className='data-container'>
    <ReactFlagsSelect
      className='selector'
      searchable={true}
      searchPlaceholder="Search for a country"
      onSelect={onSelectFlag}
      selectedSize={20}
      optionsSize={13}
    />
  </div>

}

