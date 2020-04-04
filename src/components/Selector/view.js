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
      selectedSize={isMobile ? 15 : 20}
      optionsSize={isMobile? 12.5 : 13}
    />
  </div>

}

