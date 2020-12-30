import React, { Component } from 'react';

class mis_noticias extends Component{
    render(){
        return(
            <div className='mt-5'>
                <div className="row justify-content-md-center">
                        <h2>Mis Noticias</h2>
                </div>
                <div className='mt-5'>
                    <div className="row justify-content-md-center" style={{fontSize: '23px'}}>
                        <p><em>     No tienes noticias guardadas.</em></p>
                    </div>
                    <div className='mt-5'>
                        <div className="row justify-content-md-center">
                            <p className="lead" style={{fontSize: '45px'}}>     (u_u)</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default mis_noticias;