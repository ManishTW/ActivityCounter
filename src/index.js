import React from 'react'
import { render } from 'react-dom'
import {SkiDayList} from './components/SkiDayList'

//Sometimes we get an error which says React is not defined. Adding React to the window solves the problem
window.React = React;

render(
	<SkiDayList days={
		[
			{
				resort:"Square Valley",
				date: new Date("1/12/2018"),
				powder:true,
				backcountry:false
			},
			{
				resort:"Kirkwood",
				date: new Date("12/12/2016"),
				powder:false,
				backcountry:false
			},
			{
				resort:"Shera Valley",
				date: new Date("4/9/2017"),
				powder:false,
				backcountry:true
			}
		]	
	}/>,
	document.getElementById('react-container')
)