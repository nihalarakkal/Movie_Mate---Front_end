// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import WatchTimeGraph from '../components/WatchTimeGraph';
import Recommendations from './Recommendations';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('stats'); 

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>

      {/* Tab Buttons */}
      <div className="btn-group mb-4" role="group">
        <button
          className={`btn btn-${activeTab === 'stats' ? 'primary' : 'outline-primary'}`}
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </button>
        <button
          className={`btn btn-${activeTab === 'recommendations' ? 'primary' : 'outline-primary'}`}
          onClick={() => setActiveTab('recommendations')}
        >
          Recommendations
        </button>
      </div>

      
      {activeTab === 'stats' && (
        <>
          <WatchTimeGraph interval="weekly" />
          <WatchTimeGraph interval="monthly" />
        </>
      )}

      {activeTab === 'recommendations' && <Recommendations />}
    </div>
  );
};

export default Dashboard;
