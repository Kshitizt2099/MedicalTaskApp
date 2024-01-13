import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { createStore } from 'redux';
import { reducer } from './Redux/reducer2';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer)
root.render(
  <BrowserRouter>

    <App  store={store}/>
  </BrowserRouter>
);

