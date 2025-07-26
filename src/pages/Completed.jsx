import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Completed = () => {
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/movies/?status=completed')
      .then((res) => {
        const seenTitles = new Set();
        const uniqueMovies = res.data.filter((movie) => {
          if (!seenTitles.has(movie.title)) {
            seenTitles.add(movie.title);
            return true;
          }
          return false;
        });

        setCompletedList(uniqueMovies);
      })
      .catch((err) => {
        console.error('Error fetching completed movies:', err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Completed Shows/Movies</h2>
      {completedList.length === 0 ? (
        <p>No completed shows or movies.</p>
      ) : (
        <div className="row">
          {completedList.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text"><strong>Platform:</strong> {movie.platform}</p>
                  <p className="card-text"><strong>Director:</strong> {movie.director}</p>
                  <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
                  <p className="card-text"><strong>Status:</strong> {movie.status}</p>
                  {movie.review && (
                    <p className="card-text"><strong>Review:</strong> {movie.review}</p>
                  )}
                  {movie.rating && (
                    <p className="card-text"><strong>Rating:</strong> {movie.rating}/10</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Completed;
