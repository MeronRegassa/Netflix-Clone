import React, { useEffect, useState } from 'react'
import axios from "../axios" // this axios is imported from axios  file which has our base url "https://api.thenmoviedb.org/3" on instance variable.
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"; //fetches the trailers  url

const base_url = "https://image.tmdb.org/t/p/original";
//props reusablility using distruct
function Row({ title, fetchUrl, isLargeRow }) {
  //creating state
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      // axios is syntactic suger
      const request = await axios.get(fetchUrl);
      // console.log(request)
      //updating state using setMovies function.
      setMovies(request.data.results);
      // return request;
    }
    fetchData();
  }, [fetchUrl]); //dependancy array
//   console.log(movies);
    
    //trailer player options
    const opts = {
        height: "320",
        width: "100%",
        playerVars: {
            autoplay: 1, //autoplay on
        }
    };
    //movieTrailer event handler
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.name || movie.original_name)
            //  movieTrailer(null, { tmdbId: movie.id })
                 .then((url) => {
                   console.log("url is " + url);
                 const urlParams = new URLSearchParams(new URL(url).search);
                   setTrailerUrl(urlParams.get("v"));
                   console.log(trailerUrl);
               })
               .catch((error) => console.log(error));
        }
    }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            } `} // using turnery operator.
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row