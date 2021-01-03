import React, { Component } from 'react';
// import routes from './routes';
// import history from '../../helpers/history';

//react-dropdown
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

import './navbar.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

class navbar extends Component{ //transforma la clase en componente
 
    constructor(props){
        super(props);
        // this.state = {
        //     pages: routes(),
        // }
        this.onSelect = this.onSelect.bind(this);
        // this.onPageClick = this.onPageClick.bind(this);
    }
    // onPageClick(root) {
    //     history.push(root);
    // }

    onSelect(event){
        this.defaultvalue = event.value;
        console.log(event.value);
    }
    
    render(){
        const defaultvalue = "Nacional"
        // const pages = this.state.pages;
        // const options = [
        //     'Nacional', 'Internacional'
        //   ];
        //esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <div className='mt-3'>
                <div className="row justify-content-md-center">
                    <div className="navbar navbar-dark" style={{ alignItems:'center',display: 'block', float: "none", textAlign: "center", backgroundColor: "white"}}>
                        <DropdownButton id="dropdown-basic-button" title={defaultvalue} style={{ backgroundColor: "#fff"}} placeholder = "Nacional">
                            <Dropdown.Item href="#/action-1">Nacional</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Internacional</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};
export default navbar;