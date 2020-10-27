import React from 'react'
import ReactTooltip from "react-tooltip";
import "../../styles/mapChart.css";

export default function (props) {
  const { country, confirmed, recovered, deaths, toolTip } = props

  const formatValue = (value) => {
    let number = Number(value).toFixed(0);
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let confirmedCases = formatValue(confirmed);
  let recoveredCases = formatValue(recovered);
  let deathCases = formatValue(deaths);

  return toolTip ?
    <ReactTooltip
      className='tool-tip-content'
      place='bottom'
      arrowColor=' #2d862d'
    >
      <h4 className='numbers-toolTip-header'>{country}</h4>
      <div className='numbers-toolTip confirmed'>Confirmed: {confirmedCases}</div>
      <div className='numbers-toolTip recovered'>Recovered: {recoveredCases} </div>
      <div className='numbers-toolTip deaths'>Deaths: {deathCases}</div>
    </ReactTooltip> :
    <ReactTooltip className='tool-tip-content' place='bottom'>
      <div>
        Hover on Map
        </div>
    </ReactTooltip>
}

