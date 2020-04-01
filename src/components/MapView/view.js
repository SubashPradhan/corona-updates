import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "../../styles/mapChart.css";

import MapChart from "./mapChart";
import CountryData from '../CountryData'


export default function (props) {
  const {country} = props
  const name = country
  console.log("Name", name)
  const [count, setContent] = useState();
  return (
    <div>
      <MapChart 
        setTooltipContent={setContent} 
        />
      <ReactTooltip>{country}</ReactTooltip>
    </div>
  );
}
