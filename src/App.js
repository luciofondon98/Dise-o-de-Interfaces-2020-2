// import logo from './logo.svg';
import './App.css';

import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import NewsCards from './components/NewsCards'

import Mis_noticias from './components/mis_noticias'
import Perfil from './components/perfil'
import Configuracion from './components/configuracion'

function App() {
  return (
    <div>
      {/* <Configuracion></Configuracion> */}
      {/* <Perfil></Perfil> */}
      {/* <Mis_noticias></Mis_noticias> */}
      <header>
        <NavBar></NavBar>
      </header>
      <NewsCards></NewsCards>
    </div>  
  );
}

export default App;
