import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CounterContainer from './Counter/CounterContainer';
import FormContainer from './Form/FormContainer';
import NestedComponent from './NestedComponent';

ReactDOM.render(<NestedComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
