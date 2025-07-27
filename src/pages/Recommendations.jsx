import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/recommendations/1/')
      .then((res) => {
        setRecommendations(res.data.recommended);
      })
      .catch((err) => {
        console.error('Error fetching recommendations:', err);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations found.</p>
      ) : (
        <ul className="list-group">
          {recommendations.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item.title}</strong><br />
              Genre: {item.genre}<br />
              Platform: {item.platform}<br />
              Status: {item.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
