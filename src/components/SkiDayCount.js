import React from 'react'
import '../stylesheets/ui.scss'

//Create a component using React.createClass
export const SkiDayCount = React.createClass({
    render() {
        return (
            <div>
                <div className="ski-day-count">
                    <div className="total-days">
                        <span>{this.props.total}</span>  
                        <span>days </span>
                    </div>
                    <div className="powder-days">
                        <span>{this.props.powder}</span>  
                        <span>days </span>
                    </div>
                    <div className="backcountry-days">
                        <span>{this.props.backcountry}</span>  
                        <span>days </span>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
})