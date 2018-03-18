import {Component} from 'react'
import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => (
   ((decimal*100) + '%')
)

const calcGoalProgress = (total,goal)=> {
    return percentToDecimal(total/goal)
}


export const SkiDayCount = (props) => (
    <div>
        <div className="ski-day-count">
            <div className="total-days">
                <span>{props.total}</span>  
                <span>days </span>
            </div>
            <div className="powder-days">
                <span>{props.powder}</span>  
                <span>days </span>
            </div>
            <div className="backcountry-days">
                <span>{props.backcountry}</span>  
                <span>days </span>
            </div>
            <div>
                <span>{calcGoalProgress(props.total,props.goal)}</span>
            </div>
        </div>
    </div>
)