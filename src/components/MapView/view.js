import React from 'react'
import ReactTooltip from "react-tooltip";
// import AnimatedNumber from 'animated-number-react'
import "../../styles/mapChart.css";

export default function (props) {
  const { country, confirmed, recovered, deaths } = props
  return <div className='container'>
    <ReactTooltip >
      <div>Country: {country}</div>
      <div>confirmed: {confirmed}</div>
      <div>recovered: {recovered} </div>
      <div>deaths: {deaths}</div>
    </ReactTooltip>
  </div>

}
