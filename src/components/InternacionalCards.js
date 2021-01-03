import React, { Component } from 'react';

import TinderCard from "react-tinder-card";
import "./NewsCards.css";
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

import "./swipeButtons.css"


class InternacionalCards extends Component{

    constructor(props){
        super(props);
        this.state = {
            noticias: [
                {
                    photo: "https://static.emol.cl/emol50/Fotos/2020/12/31/file_20201231132809.jpg",
                    title: "España y Reino Unido llegan a un principio de acuerdo sobre Gibraltar",
                    body: "<La ministra española de Asuntos Exteriores, Arancha Gonzaléz Laya, explicó que el territorio se sumará al espacio Schengen de libre circulación de personas de la UE"
                },
                {
                    photo: "https://static.emol.cl/emol50/Fotos/2020/12/31/file_20201231053146.jpg",
                    title: "Tokio supera por primera vez los mil casos diarios de coronavirus",
                    body: "La cifra de contagios de hoy estará en torno a los 1.300, según adelantaron los medios locales"
                },
                {
                    photo:"https://static.emol.cl/emol50/Fotos/2020/12/30/file_20201230195510.jpg",
                    title: "Bolsonaro critica aprobación del aborto en Argentina: Lamento profundamente la vida de esos niños",
                    body: "Por su parte, el cacilles brasileño, Ernesto Aráujo, también cuestionó el despacho de la iniciatica y afirmó que en el país trasandino se ha legalizado la barbarie"
                },
                {
                    photo: "https://static.emol.cl/emol50/Fotos/2020/12/30/file_20201230164311.jpg",
                    title: "Explosiones en aeropuerto de Yemen dejan al menos 22 muertos y 50 heridos", 
                    body: "El Gobierno culpó dek ataque a los rebeldes huties, con lso que está en guerra desde finales de 2014. Sin embargo, este grupo se desvinculó del hecho y tamcbién lo condenó"
                }
            ]
        }
    }
    
    render(){
        
        const {noticias} = this.state

        return(
        <div className= "tinderCards_cardContainer">
            {noticias.map((noticia)=>{
                return ( 
                    <TinderCard className="swipe" key={noticia.title} preventSwipe={["up","down"]}> 
                    <div className="card" style={{width: '30rem', textAlign: 'center',height: '35rem'}}>
                        <img className="card-img-top" src={noticia.photo} alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">{noticia.title}</h5>
                            <p className="card-text">{noticia.body}</p>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                        <div className="swipeButtons">
                                <IconButton className="left">
                                    <ClearIcon style={{width: "20%", height: '60px'}} ></ClearIcon>
                                </IconButton>
                                <IconButton className="right">
                                    <CheckIcon style={{width: "20%", height: '60px'}} ></CheckIcon>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    </TinderCard>    
                )
            }
        )}
        </div>
        );
    }
};

export default InternacionalCards;