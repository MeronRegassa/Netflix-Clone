import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from '../axios';
import requests from '../requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchOneMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(requests.fetchNetflixOriginals);
      setMovie(
        // request.data.results[index]the random array method generaes random index numbers
        request?.data.results[ //optional channing (it makes error as undefined)
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchOneMovie(); //invoking function
  }, []);
  // const str = "The quick brown fox jumps over the lazy dog.";
  // console.log(str.slice(0, 10) + "...") // The quick ...

  function truncate(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center  center",
        
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" >Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fedeBottom" />
    </header>
  );
}

  export default Banner;


