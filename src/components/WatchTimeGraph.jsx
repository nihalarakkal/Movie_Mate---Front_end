
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WatchTimeGraph = ({ interval }) => {
  const [watchTime, setWatchTime] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = 1; 

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/watch-stats/${userId}/`)
      .then((res) => {
        setWatchTime(res.data[interval]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Error fetching ${interval} stats`, err);
        setLoading(false);
      });
  }, [interval]);

  return (
    <div className="card p-3 mb-4">
      <h5 className="mb-2">
        {interval === 'weekly' ? '📅 Weekly Watch Time' : '📆 Monthly Watch Time'}
      </h5>
      {loading ? (
        <p>Loading...</p>
      ) : watchTime && watchTime > 0 ? (
        <p>{watchTime} minutes</p>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
};

export default WatchTimeGraph;
