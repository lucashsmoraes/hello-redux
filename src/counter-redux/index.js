import React, { PureComponent } from 'react'
import { createStore } from 'redux'
import Counter from './counter'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        default:
    }
    return state
}

const store = createStore(counter)

class CounterContainer extends PureComponent {
    constructor() {
        super()
        
        this.increment = () => {
            store.dispatch({ type: 'INCREMENT' })
        }

        this.decrement = () => {
            store.dispatch({ type: 'DECREMENT' })
        }
    }

    componentDidMount () {
        store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <Counter
                counter={store.getState()}
                decrement={this.decrement}
                increment={this.increment}
            />
        )
    }
}

export default CounterContainer