import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
    
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this) //We need to bind this so that this can be used inside the function
    }
    
    submit(e) {
        e.preventDefault();
        console.log('resort', this.refs.resort.value)
        console.log('date', this.refs.date.value)
        console.log('powder', this.refs.powder.checked)
        console.log('backcountry', this.refs.backcountry.checked)
    }

    render() {
        const {resort, date, powder, backcountry } = this.props
        return (
            <form onSubmit={this.submit} className="add-day">
                <label htmlFor="resort">Resort Name</label>
                <input id="resort" type="text" required
                defaultValue={resort} 
                ref="resort"/>
                
                <label htmlFor="date">Date</label>
                <input id="date" type="text" required 
                defaultValue={date}
                ref="date"/>
                
                <div>
                    <input id="powder" type="checkbox" 
                    defaultChecked={powder} 
                    ref = "powder"/>
                    <label htmlFor="powder">Powder Day</label>
                </div>
                <div>
                    <input id="backcountry" type="checkbox" 
                    defaultChecked={backcountry}
                    ref="backcountry"/>
                    <label htmlFor="backcountry">Backcountry day</label>
                </div>
                <button>Add day</button>
            </form>
        )
    }
}

AddDayForm.defaultProps = {
    resort:"KirkWood",
    date:"2017-02-12",
    powder:true,
    backcountry:false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}