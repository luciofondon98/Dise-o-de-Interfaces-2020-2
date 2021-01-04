import React, { Component } from 'react';
import routes from './routes';
import history from '../../helpers/history';



//react-dropdown
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

import './navbar.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom';

class navbar extends Component{ //transforma la clase en componente
    constructor() {
        super();

        this.state = {
            dropDownValue: "Categoria"
        }
    }
    
    changeValue(text) {
        this.setState({dropDownValue: text})
    }
    
    render(){
        // const defaultvalue = "Nacional"
        
        //esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <div className='mt-3'>
                <div className="row justify-content-md-center">
                    <div className="navbar navbar-dark" style={{ alignItems:'center',display: 'block', float: "none", textAlign: "center", backgroundColor: "white"}}>
                        <DropdownButton id="dropdown-basic-button" title={this.state.dropDownValue} style={{ backgroundColor: "#fff"}}>
                            <Dropdown.Item as="button" >
                                <Link to = "/">
                                <div onClick={(e) => this.changeValue(e.target.textContent)}>Nacional</div>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" >
                             <Link to = "/Internacional">    
                                <div onClick={(e) => this.changeValue(e.target.textContent)}>Internacional</div>
                               </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};
export default navbar;