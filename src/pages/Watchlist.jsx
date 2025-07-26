import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Watchlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/movies/?status=wishlist')
      .then(res => {
        // ✅ Filter duplicates based on title
        const seenTitles = new Set();
        const unique = res.data.filter(movie => {
          if (!seenTitles.has(movie.title)) {
            seenTitles.add(movie.title);
            return true;
          }
          return false;
        });

        setWishlist(unique);
      })
      .catch(err => {
        console.error('Error fetching wishlist:', err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Watchlist</h2>
      {wishlist.length === 0 ? (
        <p>No movies in watchlist.</p>
      ) : (
        <div className="row">
          {wishlist.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text"><strong>Platform:</strong> {movie.platform}</p>
                  <p className="card-text"><strong>Status:</strong> {movie.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
