import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const Reviews = () => {
  const { movieId } = useParams();

  const [arrayReviews, setArrayReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}//reviews?api_key=302af559a68ff45fc409dd542a8f2629&language=en-US&page=1`
      )
      .then(results => setArrayReviews(results.data.results));
  }, [movieId]);

  return (
    <div>
      {arrayReviews.length > 0 ? (
        <ul>
          {arrayReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </div>
  );
};

export default Reviews;
