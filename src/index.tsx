import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/styles/index.scss';
import App from './App';
import reducer from './store/reducer';

const store = createStore(reducer);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
