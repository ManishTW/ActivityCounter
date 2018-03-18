import React from 'react'
import { render } from 'react-dom'
import {App} from './components/App'

//Sometimes we get an error which says React is not defined. Adding React to the window solves the problem
window.React = React;

render(
	<App/>,
	document.getElementById('react-container')
)