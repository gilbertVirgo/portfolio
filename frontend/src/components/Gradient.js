import React from "react";

import palette from "../palette";

const Gradient = ({color}) => 
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 501 115"
        style={{position: "absolute", zIndex: "-1"}}>
        <defs>
            <linearGradient 
                id="linear-gradient" 
                x1="250.5" 
                x2="250.5" 
                y2="115" 
                gradientUnits="userSpaceOnUse">
                <stop 
                    offset="0" 
                    stopColor="transparent" 
                    stopOpacity="0"/>
                <stop 
                    offset="1"
                    stopColor={palette[color]}
                    stopOpacity="1"/>
            </linearGradient>
        </defs>
        <rect 
            style={{fill: "url(#linear-gradient)"}}
            width="100%" 
            height="100%"/>
    </svg>
  
export default Gradient;