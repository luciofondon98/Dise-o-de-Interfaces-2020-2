import React, { Component } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class mis_noticias extends Component{
    render(){
        return(
            <div className='mt-4'>
                <div className='mt-5'>
                    <div className="row justify-content-md-center" style={{fontSize: '23px'}}>
                        <p><em>No quedan más noticias</em></p>
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