import React, { PureComponent } from 'react'

class Counter extends PureComponent {
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
        const { counter } = this.state
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter