import React, {useEffect, useState} from "react";

import screens from "../screens";

const setClassName = (screenIndex, masterIndex) => {
    if(screenIndex < masterIndex) return "hiddenAbove";
    else if(screenIndex > masterIndex) return "hiddenBelow";
    else return "";
}

// Shorthand. Forms array of screen comopnents and
// sets props for each depending on masterIndex and
// screenIndex 
const setScreens = masterIndex => 
    screens.map(([, screen], screenIndex) => screen({
        className: setClassName(screenIndex, masterIndex)
    }));

const Master = ({match: {params: {id}}}) => {
    const [props, setProps] = useState({});
    const [body, setBody] = useState(null);

    useEffect(() => {
        (function() {
            const masterIndex = id - 1;
            let [props] = screens[masterIndex];

            setProps(props);
            setBody(setScreens(masterIndex));
        }) ();
    }, [id]);

    // Figure out way of animating text off screen?

    return body && <main className="master" {...props}>
        {body}
    </main>;
}

export default Master;