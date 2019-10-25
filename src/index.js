import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './components/redux/store';
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// Как єто работает? onIncrement: ()=>dispatch(timeActions.increment(10)) 38 min
