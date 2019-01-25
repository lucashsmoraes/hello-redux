import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Counter from './counter'

class CounterContainer extends PureComponent {
    constructor() {
        super()
        
        this.increment = () => {
            this.props.dispatch({ type: 'INCREMENT' })
        }

        this.decrement = () => {
            this.props.dispatch({ type: 'DECREMENT' })
        }
    }

    render() {
        return (
            <Counter
                counter={this.props.counter}
                decrement={this.decrement}
                increment={this.increment}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps) (CounterContainer)