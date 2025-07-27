import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/movies/')
      .then(res => {
        const seenTitles = new Set();
        const uniqueMovies = res.data.filter(movie => {
          if (!seenTitles.has(movie.title)) {
            seenTitles.add(movie.title);
            return true;
          }
          return false;
        });

        setMovies(uniqueMovies);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Movies</h2>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul className="list-group">
          {movies.map(movie => (
            <li key={movie.id} className="list-group-item">
              {movie.title} ({movie.platform})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
