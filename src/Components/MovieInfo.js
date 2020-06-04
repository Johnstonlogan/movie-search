import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import "../Styling/MovieInfo.scss"
import { MovieCardFront } from './MovieCardFront';
import { MovieCardBack } from './MovieCardBack';


export const MovieInfo = (props) => {
    const [isFlipped, setFlip] = useState(false)
    console.log(props.currentMovie)
    return(
        <React.Fragment>
        <ReactCardFlip  isFlipped={isFlipped}> 
       <MovieCardFront  {...props}/>
       <MovieCardBack {...props}/>
        
        </ReactCardFlip>
        <div className="movie-buttons">
        <button onClick={() => setFlip(!isFlipped)} >{!isFlipped ? "Movie Info" : "Movie Poster" }</button>
        <button onClick={props.clearMovie}>Clear Movie</button>
        </div>
       
        </React.Fragment>
    )
}