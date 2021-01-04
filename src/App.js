// import logo from './logo.svg';
import './App.css';

import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import NewsCards from './components/NewsCards'



import MenuLateral from './components/MenuLateral'
import InternacionalCards from "./components/InternacionalCards";
import mis_noticias from './components/mis_noticias';
import perfil from './components/perfil';
import configuracion from './components/configuracion';



function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <MenuLateral></MenuLateral>
          <Switch>
            <Route exact path='/' render={() => <div><NavBar></NavBar><NewsCards></NewsCards> </div>}/> 
            <Route exact path="/Nacional" components={NavBar, NewsCards}/>
            <Route exact path="/Internacional" components={NavBar, InternacionalCards}/>
            <Route exact path="/Mis_Noticias" component={mis_noticias}/>
            <Route exact path="/Perfil" component={perfil}/>
            <Route exact path="/Configuracion" component={configuracion}/>
          </Switch>
        </div>
      </Router>
    </div>  
  );
}

export default App;
