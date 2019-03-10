//Container Component

import React from 'react';
import Counter from './Counter';

//Container Component will have class 

class CounterContainer extends React.Component {
    constructor() {
        super();
        console.log('Constructor called');

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
    }

    componentWillMount() {
        console.log('Component is mounting...');
    }

    componentDidMount() {
        console.log('Comonet mounted...');
    }

    componentDidUpdate() {
        console.log('Comonent updated...');
    }

    // increment = () => {
    //     console.log('buttonclicked',this);
    // }

    increment = function() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('Rendered');
        return (
            <Counter 
                count = {this.state.count}
                handleIncrement = {this.increment}
            />
        );
    }
}

export default CounterContainer;

// constructor()
// componentwillmount()
// componentdidmount()
// componentshouldupdate()
// componentdidupdate()
// render()