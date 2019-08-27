import React from "react";

const Container = ({style = {}, className = "", children}) => 
    <div 
        style={style}
        className={"container " + className}>
        {children}
    </div>

export default Container;