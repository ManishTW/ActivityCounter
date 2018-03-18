import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm';
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
    countDays(filter) {
        const { allSkiDays } = this.state
        return allSkiDays.filter(
            (day) => (filter) ? day[filter] : day).length
    },
    render() {
        return (
            <div className="app">
            {(this.props.location.pathname === "/") ? 
                <SkiDayCount total={this.countDays()}
                powder={this.countDays("powder")}
                backcountry={this.countDays("backcountry")}/> : 

                (this.props.location.pathname === "/add-day") ? <AddDayForm/> : 
                <SkiDayList days={this.state.allSkiDays}/>
            }
             </div>
        )
    }
})