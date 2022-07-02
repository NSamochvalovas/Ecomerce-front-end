import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./fonts.css";
import Router from "./Router";
import {Provider} from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
