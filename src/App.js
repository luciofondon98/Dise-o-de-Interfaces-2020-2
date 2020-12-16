// import logo from './logo.svg';
import './App.css';

import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import Tinder_Card from './components/tinder_card'

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <Tinder_Card></Tinder_Card>
    </div>  
  );
}

export default App;
