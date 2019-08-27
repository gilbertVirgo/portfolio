import React, {useGlobal} from "reactn";

const Link = ({targetScreen}) => {
    const [currentScreen] = useGlobal("currentScreen");
    
    const handleClick = () => {
    }

    return <button onClick={handleClick}></button>;
}

export default Link;