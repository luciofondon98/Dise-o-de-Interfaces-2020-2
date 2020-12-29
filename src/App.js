// import logo from './logo.svg';
import './App.css';

import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import NewsCards from './components/NewsCards'

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <NewsCards></NewsCards>
    </div>  
  );
}

export default App;
