import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { configureStore } from './store/configStore';
;

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


