import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  LandingPage from './Component/LandingPage/LandingPage';
import Home from './Component/Home/Home.jsx';
import CreateActivity from './Component/CreateActivity/CreateActivity.jsx';
import Details from './Component/Details/Details.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/activity" component={CreateActivity} />
          <Route path="/home/:id" component={Details}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;