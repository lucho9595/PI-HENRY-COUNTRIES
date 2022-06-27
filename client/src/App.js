import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandindPage from './Component/LandingPage/landingpage';
import Home from './Component/Home/Home.jsx';
import Details from './Component/Card/Card.jsx';
import Activity from './Component/Activity/Activity.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandindPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/countries/:id" component={Details} />
          <Route path="/activities" component={Activity} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
