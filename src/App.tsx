import React from 'react';
import getUsers from './services/getUsers';
import Router from './router';
import {BrowserRouter} from "react-router-dom"

function App() {
  console.log(getUsers())
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
