import React from "react";

const Screen = ({children, className = ""}) => 
    <div className={"screen outer " + className}>
        <div className="screen inner">{children}</div>
    </div>

export default Screen;