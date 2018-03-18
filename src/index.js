import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Router, Route, hashHistory } from 'react-router'
import {Whoops404} from './components/Whoops404.js'
//Sometimes we get an error which says React is not defined. Adding React to the window solves the problem
window.React = React;

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById('react-container')
)