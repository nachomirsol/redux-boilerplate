
import React, { Fragment } from 'react';
import HomePage from './containers/HomePage'

import { Provider } from 'react-redux';
import store from './store';


import './App.css';


const App = () => {


  return (
    <Provider store={store}>
      <Fragment>
        <HomePage />
      </Fragment>
    </Provider>
  )
}




export default App