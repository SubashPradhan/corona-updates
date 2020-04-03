import React from 'react'
import ReactTooltip from "react-tooltip";
import "../../styles/mapChart.css";

export default function (props) {
  const { country, confirmed, recovered, deaths, toolTip } = props
  return toolTip?
    <ReactTooltip
      className='tool-tip-content'
      place='bottom'
      arrowColor=' #2d862d'
    >
      <h4 className='numbers-toolTip-header'>{country}</h4>
      <div className='numbers-toolTip confirmed'>Confirmed: {confirmed}</div>
      <div className='numbers-toolTip recovered'>Recovered: {recovered} </div>
      <div className='numbers-toolTip deaths'>Deaths: {deaths}</div>
    </ReactTooltip> :
    <ReactTooltip className='tool-tip-content' place='bottom'>
      <div>
        Hover on Map
        </div>
    </ReactTooltip>
}

