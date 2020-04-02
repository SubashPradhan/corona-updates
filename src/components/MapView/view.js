import React from 'react'
import ReactTooltip from "react-tooltip";
import "../../styles/mapChart.css";

export default function (props) {
  const { country, confirmed, recovered, deaths, toolTip } = props
  
  if(toolTip){
    return  <ReactTooltip
    className='tool-tip-content'  
    place='bottom'
    arrowColor=' #2d862d'
    >
      <h4 className='numbers-toolTip-header'>{country}</h4>
      <div className='numbers-toolTip confirmed'>Confirmed: {confirmed}</div>
      <div className='numbers-toolTip recovered'>Recovered: {recovered} </div>
      <div className='numbers-toolTip deaths'>Deaths: {deaths}</div>
    </ReactTooltip>
  }else{
    return <div>Select one</div>
  }
} 

