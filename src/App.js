// import logo from './logo.svg';
import './App.css';

import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        <Button>lucio chupalo</Button>
      </header>
    </div>
  );
}

export default App;
