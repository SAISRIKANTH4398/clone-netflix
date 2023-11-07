import React, { useEffect, useState } from 'react';
import requests from './requests';
import axios from './axios';
import './Banner.css'

function Banner() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header className='banner' 
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition: "center center"
    }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className='banner-fadeBottom'>
          
        </div>
    </header>
  )
}

export default Banner
