import React, { Component } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

class mis_noticias_llena extends Component{
    render(){
        return(
            <div className='mt-4'>
                <div className="row justify-content-md-center">
                    <Button>
                        <HomeIcon></HomeIcon>
                    </Button>
                        <h2>Mis Noticias</h2>
                </div>
                <div className='mt-5'>
                    <div class="row justify-content-md-center">
                        <div className="col col-lg-2">
                        <nav class="navbar navbar-light bg-light" style={{width: 350, height: 125}}>
                            <a class="navbar-brand" href="https://cooperativa.cl/noticias/sociedad/salud/coronavirus/mas-8-600-funcionarios-de-la-salud-ya-fueron-vacunados-contra-el-covid-19/2020-12-27/214447.html" style={{width: 350, height: 125}}>
                            <p style={{fontSize: '12px', left:165, top:5, position: 'relative', fontWeight: "bold"}}>Más 8.600 funcionarios de la</p>
                                    <p style={{fontSize: '12px', left:165, bottom:10 , position: 'relative', fontWeight: "bold"}}>salud ya fueron vacunados </p>
                                    <p style={{fontSize: '12px', left:165, bottom:25 , position: 'relative', fontWeight: "bold"}}>contra el Covid-19.</p>
                                    <img className="card-img-top" style={{width: 150, height: 100, position: 'absolute', top: 10}} src={"https://cooperativa.cl/noticias/site/artic/20201227/imag/foto_0000001120201227214447.jpg"} alt="Card image cap"></img>
                                </a>
                            </nav>
                            <hr className="text-dark bg-dark" style={{height:'1px', width: 350}}></hr>

                            <nav class="navbar navbar-light bg-light" style={{width: 350, height: 125}}>
                                <a class="navbar-brand" href="https://www.emol.com/noticias/Internacional/2020/12/30/1008065/Yemen-explosiones-aeropuerto.html" style={{width: 350, height: 125}}>
                                    <p style={{fontSize: '12px', left:160, top:5, position: 'relative', fontWeight: "bold"}}>Explosiones en aeropuerto de </p>
                                    <p style={{fontSize: '12px', left:160, bottom:10 , position: 'relative', fontWeight: "bold"}}>Yemen dejan al menos 22 </p>
                                    <p style={{fontSize: '12px', left:160, bottom:25 , position: 'relative', fontWeight: "bold"}}>muertos y 50 heridos.</p>
                                    <img className="card-img-top" style={{width: 150, height: 100, position: 'absolute', top: 10}} src={"https://static.emol.cl/emol50/Fotos/2020/12/30/file_20201230164311.jpg"} alt="Card image cap"></img>
                                </a>
                            </nav>
                            <hr className="text-dark bg-dark" style={{height:'1px', width: 350}}></hr>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default mis_noticias_llena;