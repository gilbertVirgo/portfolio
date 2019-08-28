import React from "react";

const Quote = ({quoteMarkColor, textColor, children}) => 
    <>
        <p 
            className={"sans-serif text-" + quoteMarkColor} 
            style={{
                marginBottom: "-30px", 
                fontSize: "60px", 
                fontWeight: "bold"}}>&ldquo;</p>
        <blockquote className={"sans-serif text-" + textColor}>
            {children}
        </blockquote>
    </>;

export default Quote;