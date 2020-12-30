import React, { Component } from 'react';

class configuracion extends Component{
    render(){
        return(
            <div className='mt-5'>
                <div className="row justify-content-md-center">
                        <h2>Configuración</h2>
                </div>
                <div className='mt-5'>
                    <div class="row justify-content-md-center">
                        <div className="col col-lg-2">
                            <nav class="navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    <p style={{fontSize: '23px'}}>Ajuste de cuentas</p>
                                </a>
                            </nav>
                            <hr className="text-dark bg-dark" style={{height:'1px'}}></hr>

                            <nav class="navbar navbar-light bg-light">
                                <a class="navbar-brand" href="#">
                                    <p style={{fontSize: '23px'}}>Notificaciones</p>
                                </a>
                            </nav>
                            <hr className="text-dark bg-dark" style={{height:'1px'}}></hr>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default configuracion;