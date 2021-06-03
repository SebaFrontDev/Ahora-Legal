import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import initialState from './initialState'
import reducer from './reducers';
import App from './routes/App';

const composeEnhancers = compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);