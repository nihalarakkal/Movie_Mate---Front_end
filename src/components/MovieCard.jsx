function MovieCard({ movie }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{movie.genre} • {movie.platform}</h6>
        <p className="card-text">Director: {movie.director}</p>
        <p className="card-text">Status: {movie.status}</p>
        {movie.is_tv_show && (
          <>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${(movie.episodes_watched / movie.total_episodes) * 100}%` }}
              >
                {movie.episodes_watched}/{movie.total_episodes}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
