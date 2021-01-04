import React, { Component } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

import imagen from '../images/Saitama.jpg'

class perfil extends Component{
    render(){
        return(
            <div className='mt-4'>
                <div className="row justify-content-md-center">
                    <Button>
                        <HomeIcon></HomeIcon>
                    </Button>
                        <h2>Mi Perfil</h2>
                </div>
                <div className='mt-4'>
                    <div className="row justify-content-md-center" style={{fontSize: '23px'}}>
                        <p>     Ethiel Aedo</p>
                    </div>
                    <div className="row justify-content-md-center" style={{fontSize: '23px'}}>
                        <img className="card-img-top" src={imagen} alt="Card image cap" style={{height: '200px', width: '200px'}}></img>
                    </div>
                    <div className='mt-2'>
                        <div className="row justify-content-md-center">
                            <p className="lead" style={{fontSize: '20px'}}>     Cambiar foto</p>
                        </div>
                        <div class="row justify-content-md-center">
                            <div className="col col-lg-2">
                                <p style={{fontSize: '23px'}}>Intereses</p>
                                <ul>
                                    <li style={{fontSize: '18px'}}>Nacional</li>
                                    <li style={{fontSize: '18px'}}>Internacional</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default perfil;