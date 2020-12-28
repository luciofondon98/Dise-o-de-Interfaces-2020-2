import React, { Component } from 'react';
import imagen from '../images/vacunas.jpg'
import { Check, X } from 'react-bootstrap-icons'

class tinder_card extends Component{
    render(){
        return(
        <div style={{display: "flex", position: 'absolute', left: '40%', top: '20%', justifyContent: 'center'}}>
            <div className="card" style={{width: '25rem', textAlign: 'center'}}>
                <img className="card-img-top" src={imagen} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">COVID-19</h5>
                    <p className="card-text">Vacunas llegan a Chile</p>
                </div>
                <div className="card-body">
                    <Check style={{width: "40%", float: "right", height: '70px', color: 'green'}} ></Check>
                    <X style={{width: "40%", float: "left", height: '70px', color: 'red'}} ></X>
                </div>
            </div>
        </div>
        );
    }
};

export default tinder_card;