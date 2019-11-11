
import React from 'react';

import { Routes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import './App.scss';
import "./styles/main.scss";

const routes = Routes();

const App = () => {
  return (
    <div className="theme-light">
      <Provider store={store}>
        <BrowserRouter children={routes} basename={"/"} />
      </Provider>
    </div>

  )
}

export default App