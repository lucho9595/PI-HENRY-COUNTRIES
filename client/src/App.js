import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  LandingPage from './Component/LandingPage/Landingpage';
import Home from './Component/Home/Home.jsx';
// import Details from './Component/Card/Card.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path="/home" component={Home} />
          {/* <Route exact path="/countries/:id" component={Details} />
          <Route path="/activities" component={Activity} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
