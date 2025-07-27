import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    platform: '',
    status: 'wishlist',
    total_episodes: '',
    episodes_watched: '',
    avg_episode_duration: '', 
    review: '',
    rating: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/movies/', formData)
      .then(res => {
        setMessage('Movie added successfully!');
        setFormData({
          title: '',
          director: '',
          genre: '',
          platform: '',
          status: 'wishlist',
          total_episodes: '',
          episodes_watched: '',
          avg_episode_duration: '', 
          review: '',
          rating: '',
        });
      })
      .catch(err => {
        console.error(err);
        setMessage('Error adding movie.');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Add Movie / TV Show</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Director</label>
          <input type="text" name="director" className="form-control" value={formData.director} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input type="text" name="genre" className="form-control" value={formData.genre} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Platform</label>
          <input type="text" name="platform" className="form-control" value={formData.platform} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
            <option value="watching">Watching</option>
            <option value="completed">Completed</option>
            <option value="wishlist">Wishlist</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Total Episodes</label>
          <input type="number" name="total_episodes" className="form-control" value={formData.total_episodes} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Episodes Watched</label>
          <input type="number" name="episodes_watched" className="form-control" value={formData.episodes_watched} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Avg. Episode Duration (in minutes)</label>
          <input type="number" name="avg_episode_duration" className="form-control" value={formData.avg_episode_duration} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Review</label>
          <textarea name="review" className="form-control" value={formData.review} onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input type="number" name="rating" className="form-control" value={formData.rating} onChange={handleChange} min="1" max="10" />
        </div>

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddMovie;
