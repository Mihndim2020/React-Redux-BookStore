import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './feature/redux/configureStore'
import { Provider } from 'react-redux'

// const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

