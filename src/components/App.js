import {createClass} from 'react'

export const App = createClass({
    getInitialState() {
        return {
            allSkiDays:[
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
        }
    },
    render() {
        return (
            <div className="app">
                {this.state.allSkiDays[0].resort}
            </div>
        )
    }
})