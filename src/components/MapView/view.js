import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "../../styles/mapChart.css";

import MapChart from "./mapChart";


export default function (props) {
  // const {country} = props
  // console.log("Name", name)
  const [content, setContent] = useState();
  return (
    <div>
      <MapChart 
        setTooltipContent={setContent} 
        />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
