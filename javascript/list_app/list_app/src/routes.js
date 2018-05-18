import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'modules/App/App';
import Home from 'modules/Home/Home';

export default (

  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home}/>
    </App>
  </BrowserRouter>
)