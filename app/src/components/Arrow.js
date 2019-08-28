import React from "react";

import {withRouter} from "react-router-dom";

const Arrow = ({children, color = "black", textColor = "black", className, variant, history}) => {
    const handleNext = () => {
        const currentIndex = +window.location.pathname.split("/").slice(-1);

        console.log(currentIndex);

        history.push("/screen/" + (currentIndex + 1))
    }

    return (<div className={"arrow outer " + className} variant={variant} onClick={handleNext}>
        <svg 
            className="arrow icon" 
            xmlns="http://www.w3.org/2000/svg" 
            width="45.503" 
            height="63.767" 
            viewBox="0 0 45.503 63.767">
            <path d="M43.052,38.725a3.249,3.249,0,0,1,4.637,0,3.329,3.329,0,0,1,0,4.637L28.259,62.794a3.361,3.361,0,0,1-4.73,0L4.1,43.362a3.279,3.279,0,0,1,4.637-4.637L22.6,52.638V3.246A3.262,3.262,0,0,1,25.892,0a3.226,3.226,0,0,1,3.246,3.246V52.635Z" transform="translate(-3.126)" className={color}/>
        </svg>
        <p 
            style={{textAlign: "center"}}
            className={"sans-serif arrow text text-" + textColor}>
            {children}
        </p>
    </div>)
}

export default withRouter(Arrow);