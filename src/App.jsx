import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import Watchlist from './pages/Watchlist';
import Completed from './pages/Completed';
import NotFound from './pages/NotFound';
import Recommendations from './pages/Recommendations';
import { UserProvider } from './UserContext';
import Dashboard from './pages/Dashboard';


const RecommendationsWrapper = () => {
  const { userId } = useParams();
  return <Recommendations userId={userId} />;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recommendations" element={<Recommendations />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
