import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

export const App = createClass({
    getInitialState() {
        return {
            allSkiDays:[
                {
                    resort:"Square Valley",
                    date: "1/12/2018",
                    powder:true,
                    backcountry:false
                },
                {
                    resort:"Kirkwood",
                    date: "12/12/2016",
                    powder:false,
                    backcountry:false
                },
                {
                    resort:"Shera Valley",
                    date: "4/9/2017",
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
    addDay(newDay) {
        this.setState( {
            allSkiDays : [
                ...this.state.allSkiDays,
                newDay
            ]
        })
    },

    render() {
        return (
            <div className="app">
            <Menu/>
            {(this.props.location.pathname === "/") ? 
                <SkiDayCount total={this.countDays()}
                powder={this.countDays("powder")}
                backcountry={this.countDays("backcountry")}/> : 

                (this.props.location.pathname === "/add-day") ? 
                <AddDayForm onNewDay={this.addDay}/> : 
                <SkiDayList days={this.state.allSkiDays}
                            filter={this.props.params.filter }/>
            }
             </div>
        )
    }
})