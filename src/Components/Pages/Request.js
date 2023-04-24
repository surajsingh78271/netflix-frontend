const API_KEY = "464941b677fb55da9d94ea840f0762d5";
const userRequest = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    FetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    FetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=79`
    
}
export default userRequest;