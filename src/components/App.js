import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
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
        return allSkiDays.filter(function(day) {
            if(filter) {
                return day[filter]
            }
            else {
                return day
            }
        }).length
    }, 
    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays("powder")}
                             backcountry={this.countDays("backcountry")}/>
            </div>
        )
    }
})