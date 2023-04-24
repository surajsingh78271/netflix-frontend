import React from 'react'
import  {  useState, useEffect} from 'react'
import baseUrl from './localaxios'
import axios from 'axios'
import "./Css/Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
function Row({title, isLarge,fetchUrl}) {

    const [movies,setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("")


    const baseUrl_image = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){

            const request = await axios.get(`${baseUrl}${fetchUrl}`);
            
            setMovie(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl])


    const handleTrailer = (movie)=>{
      if(trailerUrl){
        setTrailerUrl("")
      }else{
    movieTrailer( movie.name || movie.title || movie.original_name || "").then((url)=>{
       const urlParams = new URLSearchParams( new URL(url).search);
       setTrailerUrl(urlParams.get('v'));
       
       
    }).catch(()=>{
      alert(" This video is currently unavailble")
    })



      }

    }
  const opts = {
    height: "390",
    width : "100%",
    playerVars:{
      autoplay: 1,
    }
  }
  return (
    <div className='row'>
       <h2 className='row-heading'>{title}</h2>
       <div className="row-poster">

        {
          movies.map((movie)=>{
            return <img onClick={()=>{handleTrailer(movie)}} src={`${baseUrl_image}${isLarge ?movie.poster_path:movie.backdrop_path}`} alt={  movie.title || movie.original_name } className={`row-poster-image ${isLarge && "largeImage"}` } key={movie.id}/>
          
          })
        }


        
    </div>

       {
        trailerUrl ?( <div ><div className='youtube-close'><h2 className='youtube-close-h2' onClick={()=>{setTrailerUrl("")}}>X</h2></div><Youtube videoId={trailerUrl} opts = {opts} /></div>  ):(<span></span>)
       }
    
    </div>
  )
}

export default Row