import React, { Component } from 'react';
import routes from './routes';
import history from '../../helpers/history';

// import Dropdown from 'react-dropdown';

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
        //esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <div className="navbar navbar-dark "style={{ alignItems:'center',display: 'block',  backgroundColor: '#3f4452', float: "none", textAlign: "center"}}> {/*hola*/}
                <div className='nav-options'>
                        {pages.map( (value, index) => {
                            return(
                                <button type="button" className="btn btn-secondary" style={{marginRight: '30px'}}
                                    onClick={() => {history.push(value.path)}} 
                                    key={index}
                                >
                                    {value.name}
                                </button>
                                // <Dropdown options={this.state.options_para_quimio} onChange={(event) => this.onSelect(event,pacientes.id)} value= "Cambia" placeholder="Select an option"/>
                                // <Dropdown options="asd"/>
                            );
                        })}
                    </div>
                </div>
        </div>
        );
    }
};
export default navbar;