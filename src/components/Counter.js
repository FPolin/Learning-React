import React, { Component } from 'react'

class Counter extends Component{

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    increment() {
        this.setState(
            (previousValue) => {
                return ({
                    count: previousValue.count + 1,
                });
            },
            () => {
                console.log('LOL '+this.state.count);
            }
        )
        console.log(this.state.count);
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1>
                    WTF is this {this.state.count}.
                </h1>
                <button onClick={() => this.incrementFive()}>ADD</button>

            </div>
        )
    }
}

export default Counter;