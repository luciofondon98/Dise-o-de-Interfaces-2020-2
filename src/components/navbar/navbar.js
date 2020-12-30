import React, { Component } from 'react';
import routes from './routes';
import history from '../../helpers/history';

//react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class navbar extends Component{ //transforma la clase en componente
 
    constructor(props){
        super(props);
        this.state = {
            pages: routes(),
        }

        this.onPageClick = this.onPageClick.bind(this);
    }
    onPageClick(root) {
        history.push(root);
    }
    
    render(){
        const pages = this.state.pages;
        const options = [
            'Nacional', 'Internacional'
          ];
        //esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>

            <div className="row justify-content-md-center">
                <div className="navbar navbar-dark "style={{ alignItems:'center',display: 'block', float: "none", textAlign: "center"}}>
                    <Dropdown options={options} placeholder="Nacional" className="rounded-sm"/> 
                        {/* {pages.map( (value, index) => {
                            return(
                                // <button type="button" className="btn btn-secondary" style={{marginRight: '30px'}}
                                //     onClick={() => {history.push(value.path)}} 
                                //     key={index}
                                // >
                                //     {value.name}
                                // </button>
                                // <Dropdown options={this.state.options_para_quimio} onChange={(event) => this.onSelect(event,pacientes.id)} value= "Cambia" placeholder="Select an option"/>
                            );
                        })} */}
                    </div>
                </div>
        </div>
        );
    }
};
export default navbar;