import React from 'react'
import { useState,  useEffect } from 'react'
import './Css/Banner.css'
import userRequest from './Request'

import axios from 'axios'
import baseUrl from './localaxios'



function Banner() {
  const [movie,setMovie] = useState([])
  

  useEffect(()=>{
     async function fetchData(){

      const request = await axios.get(`${baseUrl}${userRequest.fetchNetflixOriginals}`)
  
      
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
     

     }
     fetchData();

  },[])
  return (
    

        <div className='banner' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,backgroundPosition :'center',backgroundSize:'cover'}}>

        




        <div className="banner-content">
            <h1 className="banner-content-title"> { movie.name || movie.title || movie.original_name }</h1>
            <div className='banner-content-button'>
                  <button>Play</button>
                 <button>My List</button>
            </div>
            <div className="banner-content-discription">
                <p> {movie.overview} </p>
             </div>
        
        </div>
        <div className="banner-fade"></div>
    
    
    </div>
        
  )
}

export default Banner