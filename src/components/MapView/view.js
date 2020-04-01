import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "../../styles/mapChart.css";

import MapChart from "./mapChart";

export default function (props) {
  const {country} = props
  const [content, setContent] = useState('');
  console.log('PORPS', props)
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
