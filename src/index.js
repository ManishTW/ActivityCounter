import React from 'react'
import { render } from 'react-dom'
import {SkiDayCount} from './components/SkiDayCount'

//Sometimes we get an error which says React is not defined. Adding React to the window solves the problem
window.React = React;

render(
	<SkiDayCount total={50}
				powder={20}
				backcountry={10}
				goal={100}/>,
	document.getElementById('react-container')
)