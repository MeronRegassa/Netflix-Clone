

const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  //netflix
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_watch_providers=8|119|337&watch_region=US&with_network=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoveis: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;


//https://api.thenmoviedb.org/3trending/all/week?api_key=c51f63624e20e283bdabb06cbe0956f1&language=en-US


//https://api.themoviedb.org/3/trending/all/day?api_key=c51f63624e20e283bdabb06cbe0956f1

//action movie
// https://api.themoviedb.org/3/movie/28?api_key=c51f63624e20e283bdabb06cbe0956f1&language=en-US