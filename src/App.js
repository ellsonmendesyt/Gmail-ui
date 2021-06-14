import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Navbar from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './main.css';
import Listagem from './components/Listagem';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route  path='/' exact component={Listagem} />
      </Switch>
    </Router>
    

  );
}

export default App;
