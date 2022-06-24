import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandindPage from './Component/LandingPage/landingpage';
import Home from './Component/Home/Home.jsx';
import Details from './Component/Cards/Cards.jsx';
import CreateActivity from './Component/Activity/Activity.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandindPage} />
          <Route exact path="/countries" element={Home} />
          <Route exact path="/countries/:id" element={Details} />
          <Route exact path="/create" element={CreateActivity} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
