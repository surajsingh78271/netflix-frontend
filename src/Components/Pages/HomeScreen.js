import React from 'react'
import Banner from './Banner'
import "./Css/HomeScreen.css"
import Navbar from './Navbar'
import userRequest from './Request'
import Row from './Row'
function HomeScreen() {
  return (
    <div className='homescreen'>
    <Navbar />
    <Banner/>
    


     <Row title="Netflix Originals" isLarge fetchUrl ={userRequest.fetchNetflixOriginals}/> 
     <Row title="Top Rated"  fetchUrl ={userRequest.fetchTopRated}/> 
     <Row title="Trending Now"  fetchUrl ={userRequest.fetchTrending}/> 
    
    <Row title="Action Movies"  fetchUrl ={userRequest.FetchActionMovies}/>
    <Row title="Comedy Movies"  fetchUrl ={userRequest.FetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl ={userRequest.fetchHorrorMovies}/>
    <Row title="Romances Movies"  fetchUrl ={userRequest.fetchRomanceMovies}/> 
    <Row title="Documentaries Movies"  fetchUrl ={userRequest.fetchDocumentaries}/>
    
    

    
    </div>
  )
}

export default HomeScreen