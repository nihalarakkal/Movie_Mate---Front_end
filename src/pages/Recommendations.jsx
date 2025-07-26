import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext'; // ✅ correct path

const Recommendations = () => {
  const { id } = useUser(); // get current user ID
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
  axios.get(`http://127.0.0.1:8000/api/recommendations/${id}/`)
    .then((res) => {
      // ✅ Filter duplicates based on title
      const unique = [];
      const seenTitles = new Set();

      res.data.forEach(item => {
        if (!seenTitles.has(item.title)) {
          seenTitles.add(item.title);
          unique.push(item);
        }
      });

      setRecommendations(unique);
    })
    .catch((err) => console.error('Error fetching recommendations:', err));
}, [id]);

  return (
    <div className="container mt-4">
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <div className="row">
          {recommendations.map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card shadow-sm p-3">
                <h5>{item.title}</h5>
                <p><strong>Genre:</strong> {item.genre}</p>
                <p><strong>Platform:</strong> {item.platform}</p>
                <p><strong>Status:</strong> {item.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
