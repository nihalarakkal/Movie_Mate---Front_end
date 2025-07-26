import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">🎬 MovieMate</Link>

        {/* Navbar Toggler for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">All</Link>
            </li>
            <li className="nav-item">
              <Link to="/watchlist" className="nav-link text-light">Watchlist</Link>
            </li>
            <li className="nav-item">
              <Link to="/completed" className="nav-link text-light">Completed</Link>
            </li>
            <li className="nav-item">
              <Link to="/recommendations" className="nav-link text-light">Recommendations</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="btn btn-success ms-3">+ Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
