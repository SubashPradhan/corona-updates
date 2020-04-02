import React from 'react'
import ReactTooltip from "react-tooltip";
// import AnimatedNumber from 'animated-number-react'
import "../../styles/mapChart.css";

export default function (props) {
  const { country, confirmed, recovered, deaths } = props
  return <div>
    <ReactTooltip className='numbers-container'>
      <h4>{country}</h4>
      <div className='numbers-toolTip confirmed'>confirmed: {confirmed}</div>
      <div className='numbers-toolTip recovered'>recovered: {recovered} </div>
      <div className='numbers-toolTip deaths'>deaths: {deaths}</div>
    </ReactTooltip>
  </div>

}
