import React, { useState, useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import SinNoticias from './SinNoticias'

import "./NewsCards.css";
import "./swipeButtons.css"
const db = [
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

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced () {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.title !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.title))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].title // Find the card object to be removed
      const index = db.map(person => person.title).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      {characters.length == 0 &&
      <SinNoticias></SinNoticias>
      }
      <div style={{marginBottom: 20, marginTop: 20}} className='tinderCards_cardContainer'>
        {characters.map((noticia, index) =>
            <TinderCard ref={childRefs[index]} className='swipe' key={noticia.title} onSwipe={(dir) => swiped(dir, noticia.title)} onCardLeftScreen={() => outOfFrame(noticia.title)} key={noticia.title} preventSwipe={["up","down"]}> 
          <div className="card" style={{width: '30rem', textAlign: 'center',height: '35rem'}}>
                <img className="card-img-top" src={noticia.photo} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{noticia.title}</h5>
                    <p className="card-text">{noticia.body}</p>
                </div>
                <h4>Deslice para seleccionar</h4>
                <br></br>
                <br></br>
            </div>
            </TinderCard>    
            
        )}
        <div className="card-body">
          <div style={{marginTop: 600}} className="swipeButtons">
                <IconButton onClick={() => swipe('left')} className="left" style={{ marginRight: -550}}>
                    <ClearIcon style={{width: "20%", height: '60px'}} ></ClearIcon>
                </IconButton>
                <IconButton onClick={() => swipe('right')} className="right">
                    <CheckIcon style={{width: "20%", height: '60px'}} ></CheckIcon>
                </IconButton>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Advanced;