import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results);
            setMovies(()=>response.data.results)
        }).catch(err=>{
            alert(err);
        })
    })

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((movie)=> <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+movie.backdrop_path}`} /> )}
            </div>
        </div>
    )
}

export default RowPost