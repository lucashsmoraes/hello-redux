import React, { PureComponent } from 'react'
import Counter from './counter'

class CounterContainer extends PureComponent {
    constructor () {
        super()
        this.state = {
          counter: 0
        }

        this.increment = () => {
            this.setState({
              counter: this.state.counter + 1
            })
          }

        this.decrement = () => {
            this.setState ({
                counter: this.state.counter - 1
            })
        }
    }

    render() {
        return (
            <Counter 
            counter={this.state.counter}
            decrement={this.decrement}
            increment={this.increment}
            />
        )
    }
}

export default CounterContainer