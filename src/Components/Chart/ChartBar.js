import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight='0%';

    if(props.maxValue>0){
        barFillHeight=Math.round((props.value/props.maxValue)*100)+'%';     
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barFillHeight}}></div>  {/*if you have the property like a dash e.g. background-color, then either write in quote or camelCase e.g. 'background-color:blue' or backgroundColor:'blue' */}
      </div>    {/*for style, first bracket is for variable and second bracket is for object as it takes the object as a parameter*/ }
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
