import React from 'react';
import getUsers from './services/getUsers';
import Router from './router';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
