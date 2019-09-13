import React from "react";
import Screen from "./components/Screen";
import Arrow from "./components/Arrow";
import Subtitle from "./components/Subtitle";
import Quote from "./components/Quote";
import Git from "./components/Git";

const screens = [
    [{variant: "dark"},
    props => <Screen key={1} {...props}>
        <Git iconColor="orange" textColor="cream"/>
        <div className="wave" style={{width: "100px", margin: "0 auto"}}>
            <img 
                width="100px"
                alt="Hand" 
                src={require("./assets/hand.svg")}/>
        </div>
        <h1 className="sans-serif text-cream text-center">Hi, I'm Gil</h1>
        <Arrow 
            color="orange" 
            textColor="cream">
            me
        </Arrow>
    </Screen>], 

    [{variant: "orange"},
    props => <Screen key={2} {...props}>
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
    props => <Screen key={3} {...props}>
        <p className="large serif text-white">
            Christian<br/>
            Heritage<br/>
            London
        </p>
        <Subtitle className="text-cream">Website</Subtitle>
        <Quote quoteMarkColor="orange" textColor="cream">
            Placeholder text
        </Quote>
        <br/>
        <img
            alt="CHL 1"
            src={require("./assets/chl_1.jpg")}/>
        <br/>
        <img
            alt="CHL 2"
            src={require("./assets/chl_2.jpg")}/>
        <Quote quoteMarkColor="orange" textColor="cream">
            Placeholder text
        </Quote>
        <Subtitle className="text-cream text-right"><small>Placeholder text</small></Subtitle>
        <br/>
        <img
            alt="CHL 3"
            src={require("./assets/chl_3.jpg")}/>
        <br/>
        <img
            alt="CHL 4"
            src={require("./assets/chl_4.jpg")}/>
        <br/>
        <Arrow 
            color="cream" 
            textColor="cream">
            more
        </Arrow>
    </Screen>],

    [{variant: "cream"},
    props => <Screen key={4} {...props}>
        <p className="large serif text-dark">
            Resin<br/>
            Bonded<br/>
            Ltd
        </p>
        <Subtitle>DBMS</Subtitle>
        <Quote quoteMarkColor="orange" textColor="dark">
            Placeholder text
        </Quote>
        <Subtitle className="text-right"><small>Placeholder text</small></Subtitle>
        <Arrow 
            color="dark" 
            textColor="dark">
            contact
        </Arrow>
    </Screen>],

    [{variant: "dark"},
    props => <Screen key={5} {...props}>
        <Git iconColor="orange" textColor="cream"/>
        <div style={{clear: "both", width: "100%", overflow: "visible", position: "relative"}}>
            <div className="ring" style={{
                display: "inline-block",
                verticalAlign: "middle", 
                maxWidth: "30%", 
                maxHeight: "200px", 
                overflow: "visible"}}>
                <img 
                    style={{height: "200px", overflow: "visible"}}
                    alt="Phone"
                    src={require("./assets/phone.svg")}/>
            </div>
            
            <p style={{
                display: "inline-block",
                verticalAlign: "middle"}} className="large serif text-white">
                Let's work<br/>
                together
            </p>
        </div>
        <div style={{clear: "both", paddingTop: "30px", boxSizing: "border-box"}}>
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
        </div>
    </Screen>]
];

export default screens;