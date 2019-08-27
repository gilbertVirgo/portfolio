import React from "react";
import Screen from "./components/Screen";
import Arrow from "./components/Arrow";
import Subtitle from "./components/Subtitle";
import Quote from "./components/Quote";

const screens = [
    [{variant: "dark"},
    props => <Screen {...props}>
        <img 
            width="100px"
            alt="Hand" 
            src={require("./assets/hand.svg")}/>
        <h1 className="sans-serif text-cream text-center">Hi, I'm Gil</h1>
        <Arrow 
            color="orange" 
            textColor="cream">
            me
        </Arrow>
    </Screen>], 

    [{variant: "orange"},
    props => <Screen {...props}>
        <p className="large serif text-white">
            I&#39;m a <span className="text-cream">website developer</span>,<br/>
            I work with The Empire and I freelance.
        </p>
        <Arrow 
            color="dark" 
            textColor="cream">
            my work
        </Arrow>
    </Screen>],

    [{variant: "dark"},
    props => <Screen {...props}>
        <p className="large serif text-white">
            Christian<br/>
            Heritage<br/>
            London
        </p>
        <Subtitle className="text-cream">Website</Subtitle>
        <Quote quoteMarkColor="orange" textColor="cream">
            Christian Heritage London exists to draw attention 
            to the advances of Christianity in [London] and to 
            commend the claims of the Christian gospel.
        </Quote>
        <br/>
        <img
            alt="CHL 1"
            src={require("./assets/chl-1.png")}/>
        <br/>
        <img
            alt="CHL 2"
            src={require("./assets/chl-2.png")}/>
        <Quote quoteMarkColor="orange" textColor="cream">
            Some flattering endorsement text here. Website 
            works well. Website works very well. It works 
            very, very well.
        </Quote>
        <Subtitle className="text-cream text-right"><small>Peter Greyling, Guide and Trustee, CHL</small></Subtitle>
        <br/>
        <img
            alt="CHL 3"
            src={require("./assets/chl-3.png")}/>
        <br/>
        <img
            alt="CHL 4"
            src={require("./assets/chl-4.png")}/>
        <br/>
        <Arrow 
            color="cream" 
            textColor="cream">
            more
        </Arrow>
    </Screen>],

    [{variant: "cream"},
    props => <Screen {...props}>
        <p className="large serif text-dark">
            Resin<br/>
            Bonded<br/>
            Ltd
        </p>
        <Subtitle>DBMS</Subtitle>
        <Quote quoteMarkColor="orange" textColor="dark">
            Some flattering endorsement text here. System 
            works well. System works very well. It works 
            very, very well.
        </Quote>
        <Subtitle className="text-right"><small>Martin Roots, CEO, Resin Bonded Ltd.</small></Subtitle>
        <Arrow 
            color="dark" 
            textColor="dark">
            contact
        </Arrow>
    </Screen>],

    [{variant: "dark"},
    props => <Screen {...props}>
        <div style={{clear: "both", width: "100%", overflow: "auto"}}>
            <img 
                style={{float: "left", height: "200px"}}
                alt="Phone"
                src={require("./assets/phone.svg")}/>
            <p style={{float: "left"}} className="large serif text-white">
                Let's work<br/>
                together
            </p>
        </div>
        <br/>
        <p className="sans-serif text-cream text-center">gil@gilbertvirgo.com</p>
        <br/><br/><br/>
        <div style={{textAlign: "center"}}>
            <img 
                style={{height: "25px", display: "inline-block", margin: "0", verticalAlign: "middle"}}
                alt="Right Arrow"
                src={require("./assets/right-arrow.svg")}/>
            <p 
                style={{display: "inline-block", verticalAlign: "middle", margin: "0 10px"}}
                className="text-expand sans-serif text-cream text-center"><b>
                    <a href="http://theempire.netlify.com">The Empire</a>
                </b></p>
            <img 
                style={{height: "25px", display: "inline-block", margin: "0", verticalAlign: "middle"}}
                alt="Left Arrow"
                src={require("./assets/left-arrow.svg")}/>
        </div>
    </Screen>]
];

export default screens;