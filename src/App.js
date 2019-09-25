
import React, { Fragment } from 'react';
import { Routes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';


import './App.css';

const routes = Routes();
const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter children={routes} basename={"/"} />
    </Provider>
  )
}




export default App