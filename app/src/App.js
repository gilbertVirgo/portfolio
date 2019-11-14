import React, {useState, useEffect} from 'react';

import {Switch, Redirect, Route} from "react-router-dom";

import "./scss/main.scss";
import Master from './components/Master';

const App = () => {
	useEffect(() => {
		(async function() {
			const opt = {"api-key": "8b368df585241bfbfc3ae8133dc1c32e"};
			const req = await fetch('https://api.scripture.api.bible/v1/bibles/GNT/verses/Genesis%201%3A1', opt);
			const data = await req.json();

			console.log({data});
		})();
	}, []);

	return (
		<Switch>
		    <Redirect exact from="/" to="/screen/1" />
		    <Route path="/screen/:id" render={props => <Master {...props}/>}/> 
		</Switch>
	);
};

export default App;
