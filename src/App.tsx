import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/home';
import { Location } from './pages/location';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/location/:id' exact>
            <Location />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
