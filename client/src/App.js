import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  LandingPage from './Component/LandingPage/Landingpage';
import Home from './Component/Home/Home.jsx';
import CreateActivity from './Component/CreateActivity/CreateActivity.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/Createactivity" component={CreateActivity} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
