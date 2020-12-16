import { render } from '@testing-library/react';
import React, { Component } from 'react';
import imagen from '../images/vacunas.jpg'

class tinder_card extends Component{
    render(){
        return(
        <div style={{display: "flex", position: 'absolute', left: '40%', top: '20%', justifyContent: 'center'}}>
            <div className="card" style={{width: '25rem', textAlign: 'center'}}>
                <img className="card-img-top" src={imagen} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Vacunas</h5>
                    <p className="card-text">Las vacunas te hacen tener la tula grande</p>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-danger" style={{width: "40%", float: "left"}}>Dislike</button>
                    <button type="button" className="btn btn-success" style={{width: "40%", float: "right"}}>Like</button>
                </div>
            </div>
        </div>
        );
    }
};

export default tinder_card;