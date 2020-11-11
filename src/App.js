import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom"
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home'
import Tournoi from './components/pages/Tournoi'
import Contact from './components/pages/Contact'

function App() { 
  return (
    <>
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Tournoi" exact component={Tournoi} />
      </Switch>
      </Router>
      </>
  )
  
}

export default App;
