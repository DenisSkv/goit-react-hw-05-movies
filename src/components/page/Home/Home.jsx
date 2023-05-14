import MostPopularMovies from '../../MostPopularMovies/MostPopularMovies';
import { useState, useEffect } from 'react';
import axios from 'axios';

import css from './Home.module.css';
const Home = () => {
  const [arrayFilms, setArrayFilms] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=302af559a68ff45fc409dd542a8f2629`
      )
      .then(results => setArrayFilms(results.data.results))
      .catch(error => console.log('🚀 ~ error:', error.message));
  }, []);
  return (
    <>
      <h1 className={css.pageHead}>Trending today</h1>
      {arrayFilms.length > 0 && <MostPopularMovies arrayFilms={arrayFilms} />}
    </>
  );
};

export default Home;
