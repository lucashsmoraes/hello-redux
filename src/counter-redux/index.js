import React, { PureComponent } from 'react'
import Counter from './counter'

class CounterContainer extends PureComponent {
    constructor() {
        super()
        
        this.increment = () => {
            this.props.store.dispatch({ type: 'INCREMENT' })
        }

        this.decrement = () => {
            this.props.store.dispatch({ type: 'DECREMENT' })
        }
    }

    componentDidMount () {
        this.props.store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <Counter
                counter={this.props.store.getState()}
                decrement={this.decrement}
                increment={this.increment}
            />
        )
    }
}

export default CounterContainer