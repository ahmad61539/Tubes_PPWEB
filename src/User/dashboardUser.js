import React, { useState } from 'react';
import '../Admin/css/Dashboard.css';

import { 
  Play, 
  Pause, 
  Download, 
  Heart, 
  Search, 
  Music, 
  Bell, 
  Settings, 
  Clock, 
  List, 
  Grid
} from 'lucide-react';

const DashboardUser = () => {
  const [currentTab, setCurrentTab] = useState('discover');
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const [currentSong, setCurrentSong] = useState({
    id: 3,
    title: "Electric Dreamscape",
    artist: "Synthwave Riders",
    album: "Neon Horizons",
    duration: "3:45",
    coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-google-playstore.svg"
  });
  
  // Mock data for songs
  const songs = [
    {
      id: 1,
      title: "Summer Breeze",
      artist: "Ocean Sounds",
      album: "Tropical Vibes",
      duration: "4:20",
      liked: true,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-apple.svg"
    },
    {
      id: 2,
      title: "Midnight City",
      artist: "Urban Echoes",
      album: "Downtown",
      duration: "3:56",
      liked: false,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-android.svg"
    },
    {
      id: 3,
      title: "Electric Dreamscape",
      artist: "Synthwave Riders",
      album: "Neon Horizons",
      duration: "3:45",
      liked: true,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-google-playstore.svg"
    },
    {
      id: 4,
      title: "Mountain Echo",
      artist: "Nature Sounds",
      album: "Wilderness",
      duration: "5:12",
      liked: false,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-windows.svg"
    },
    {
      id: 5,
      title: "Jazz Cafe",
      artist: "Smooth Quartet",
      album: "Late Night Sessions",
      duration: "6:08",
      liked: true,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-amazon.svg"
    },
    {
      id: 6,
      title: "Techno Rhythm",
      artist: "Electronic Beats",
      album: "Dance Floor",
      duration: "4:45",
      liked: false,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-soundcloud.svg"
    },
    {
      id: 7,
      title: "Acoustic Sunset",
      artist: "String Harmony",
      album: "Unplugged",
      duration: "3:22",
      liked: true,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-spotify.svg"
    },
    {
      id: 8,
      title: "Rainy Day",
      artist: "Ambient Sounds",
      album: "Weather Moods",
      duration: "5:30",
      liked: false,
      coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/logo-tux.svg"
    }
  ];

  // Playlists data
  const playlists = [
    { name: "Favorites", count: 15, coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/heart.svg" },
    { name: "Workout Mix", count: 23, coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/fitness.svg" },
    { name: "Chill Vibes", count: 18, coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/moon.svg" },
    { name: "Driving Songs", count: 32, coverImg: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.1.2/collection/components/icon/svg/car-sport.svg" }
  ];

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Toggle like state for a song
  const toggleLike = (id) => {
    const updatedSongs = songs.map(song => 
      song.id === id ? { ...song, liked: !song.liked } : song
    );
    // In a real app, you would update state here
    console.log("Toggled like for song ID:", id);
  };

  // Play a specific song
  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // Download a song
  const downloadSong = (id) => {
    console.log("Downloading song ID:", id);
    // In a real app, this would trigger a download
    alert(`Started downloading song ID: ${id}`);
  };

  // Render song item based on view mode
  const renderSongItem = (song) => {
    if (viewMode === 'grid') {
      return (
        <div key={song.id} className="song-grid-item">
          <div className="song-cover">
            <img src={song.coverImg} alt={song.title} />
            <div className="song-cover-overlay">
              {currentSong.id === song.id && isPlaying ? (
                <button className="btn-play" onClick={togglePlay}>
                  <Pause size={24} />
                </button>
              ) : (
                <button className="btn-play" onClick={() => playSong(song)}>
                  <Play size={24} />
                </button>
              )}
            </div>
          </div>
          <div className="song-info">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="song-actions">
            <button 
              className={`btn-like ${song.liked ? 'active' : ''}`}
              onClick={() => toggleLike(song.id)}
            >
              <Heart size={18} fill={song.liked ? "var(--secondary-color)" : "none"} />
            </button>
            <button className="btn-download" onClick={() => downloadSong(song.id)}>
              <Download size={18} />
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div key={song.id} className="song-list-item">
          <div className="song-list-play">
            {currentSong.id === song.id && isPlaying ? (
              <button className="btn-play" onClick={togglePlay}>
                <Pause size={18} />
              </button>
            ) : (
              <button className="btn-play" onClick={() => playSong(song)}>
                <Play size={18} />
              </button>
            )}
          </div>
          <div className="song-list-cover">
            <img src={song.coverImg} alt={song.title} />
          </div>
          <div className="song-list-info">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="song-list-album">{song.album}</div>
          <div className="song-list-duration">{song.duration}</div>
          <div className="song-list-actions">
            <button 
              className={`btn-like ${song.liked ? 'active' : ''}`}
              onClick={() => toggleLike(song.id)}
            >
              <Heart size={18} fill={song.liked ? "var(--secondary-color)" : "none"} />
            </button>
            <button className="btn-download" onClick={() => downloadSong(song.id)}>
              <Download size={18} />
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="logo">
            <Music size={24} />
          <span>MusicApp</span>
        </div>
      
          <ul className="sidebar-menu">
            <li 
              className={currentTab === 'discover' ? 'active' : ''}
              onClick={() => setCurrentTab('discover')}
            >
              <Music size={20} />
              <span>Discover</span>
            </li>
            <li 
              className={currentTab === 'playlists' ? 'active' : ''}
              onClick={() => setCurrentTab('playlists')}
            >
              <List size={20} />
              <span>Playlists</span>
            </li>
            <li 
              className={currentTab === 'liked' ? 'active' : ''}
              onClick={() => setCurrentTab('liked')}
            >
              <Heart size={20} />
              <span>Liked Songs</span>
            </li>
            <li 
              className={currentTab === 'recent' ? 'active' : ''}
              onClick={() => setCurrentTab('recent')}
            >
              <Clock size={20} />
              <span>Recently Played</span>
            </li>
          </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="search-container">
            <Search size={18} />
            <input type="text" placeholder="Search for songs, artists, or albums" />
          </div>
          
          <div className="top-bar-actions">
            <div className="notification-bell">
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </div>
            
            <button className="btn-settings">
              <Settings size={20} />
            </button>
            
            <div className="user-profile">
              <div className="user-avatar">JD</div>
              <span>John Doe</span>
            </div>
          </div>
        </div>

        {/* Content Header */}
        <div className="content-header">
          <div className="page-title">
            <h1>{currentTab === 'discover' ? 'Discover New Music' : 
                 currentTab === 'playlists' ? 'Your Playlists' : 
                 currentTab === 'liked' ? 'Liked Songs' : 'Recently Played'}</h1>
            <p>Listen to the latest trending songs</p>
          </div>
          
          <div className="view-controls">
            <div className="view-buttons">
              <button 
                className={viewMode === 'list' ? 'active' : ''} 
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
              <button 
                className={viewMode === 'grid' ? 'active' : ''} 
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Songs List/Grid */}
        <div className={`songs-container ${viewMode}`}>
          {viewMode === 'list' && (
            <div className="song-list-header">
              <div className="song-list-play"></div>
              <div className="song-list-cover"></div>
              <div className="song-list-info">TITLE</div>
              <div className="song-list-album">ALBUM</div>
              <div className="song-list-duration">DURATION</div>
              <div className="song-list-actions"></div>
            </div>
          )}
          
          <div className={`songs-${viewMode}`}>
            {songs.map(song => renderSongItem(song))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .user-dashboard {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: var(--light-color);
          position: relative;
        }

        /* Sidebar Styles */
        .sidebar {
          width: 240px;
          background-color: white;
          position: fixed;
          height: 100vh;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        .logo {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          border-bottom: 1px solid #f0f0f0;
        }

        .sidebar-section {
          padding: 1.5rem;
        }

        .sidebar-section h3 {
          font-size: 0.8rem;
          color: #999;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .sidebar-playlists {
          list-style: none;
        }

        .sidebar-playlists li {
          display: flex;
          justify-content: space-between;
          padding: 0.8rem 0;
          cursor: pointer;
          color: #666;
        }

        .sidebar-playlists li:hover {
          color: var(--primary-color);
        }

        .playlist-count {
          font-size: 0.8rem;
          color: #999;
        }

        /* Main Content Styles */
        .main-content {
          margin-left: 240px;
          padding: 1.5rem;
          flex-grow: 1;
          overflow-y: auto;
          padding-bottom: 90px; /* Space for the music player */
        }

        /* Top Bar Styles */
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .search-container {
          position: relative;
          width: 400px;
        }

        .search-container input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.5rem;
          border-radius: 50px;
          border: none;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .search-container svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .top-bar-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .notification-bell {
          position: relative;
          cursor: pointer;
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: var(--secondary-color);
          color: white;
          font-size: 0.7rem;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-settings {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
        }

        .user-avatar {
          width: 35px;
          height: 35px;
          background: var(--gradient);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        /* Content Header Styles */
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .page-title h1 {
          font-size: 1.8rem;
          margin-bottom: 0.3rem;
          color: var(--dark-color);
        }

        .page-title p {
          color: #666;
        }

        .view-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .view-buttons {
          display: flex;
          background-color: white;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }

        .view-buttons button {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          color: #666;
        }

        .view-buttons button.active {
          background-color: var(--primary-color);
          color: white;
        }

        /* Songs List View */
        .songs-container.list {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .song-list-header {
          display: grid;
          grid-template-columns: 50px 60px 2fr 1fr 100px 100px;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #f0f0f0;
          color: #999;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .songs-list {
          display: flex;
          flex-direction: column;
        }

        .song-list-item {
          display: grid;
          grid-template-columns: 50px 60px 2fr 1fr 100px 100px;
          padding: 0.8rem 1.5rem;
          align-items: center;
          border-bottom: 1px solid #f0f0f0;
          transition: background-color 0.3s ease;
        }

        .song-list-item:hover {
          background-color: #f9f9f9;
        }

        .song-list-item:last-child {
          border-bottom: none;
        }

        .song-list-play button {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .song-list-play button:hover {
          opacity: 1;
        }

        .song-list-cover {
          width: 40px;
          height: 40px;
          border-radius: 5px;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .song-list-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .song-list-info h3 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
          color: var(--dark-color);
        }

        .song-list-info p {
          font-size: 0.9rem;
          color: #666;
        }

        .song-list-album {
          color: #666;
          font-size: 0.9rem;
        }

        .song-list-duration {
          color: #666;
          font-size: 0.9rem;
        }

        .song-list-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .song-list-actions button {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .song-list-actions button:hover {
          opacity: 1;
        }

        .btn-like.active {
          color: var(--secondary-color);
          opacity: 1;
        }

        /* Songs Grid View */
        .songs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .song-grid-item {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .song-grid-item:hover {
          transform: translateY(-5px);
        }

        .song-cover {
          position: relative;
          width: 100%;
          height: 180px;
          background-color: #f0f0f0;
        }

        .song-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .song-cover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .song-grid-item:hover .song-cover-overlay {
          opacity: 1;
        }

        .song-cover-overlay .btn-play {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--gradient);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .song-info {
          padding: 1rem;
        }

        .song-info h3 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
          color: var(--dark-color);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .song-info p {
          font-size: 0.9rem;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .song-actions {
          display: flex;
          justify-content: space-between;
          padding: 0 1rem 1rem;
        }

        .song-actions button {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .song-actions button:hover {
          opacity: 1;
        }

        /* Music Player Styles */
        .music-player {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 90px;
          background-color: white;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          padding: 0 2rem;
          z-index: 20;
        }

        .player-song-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 25%;
        }

        .player-cover {
          width: 60px;
          height: 60px;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .player-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .player-details h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
          color: var(--dark-color);
        }

        .player-details p {
          font-size: 0.9rem;
          color: #666;
        }

        .player-controls {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .player-buttons {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .player-buttons button {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .player-buttons button:hover {
          opacity: 1;
        }

        .btn-play-large {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white !important;
          opacity: 1 !important;
          box-shadow: 0 2px 10px rgba(108, 99, 255, 0.3);
        }

        .player-progress {
          width: 100%;
          max-width: 500px;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .time-current, .time-total {
          font-size: 0.8rem;
          color: #666;
          width: 40px;
        }

        .time-total {
          text-align: right;
        }

        .progress-bar {
          flex-grow: 1;
          height: 4px;
          background-color: #f0f0f0;
          border-radius: 2px;
          position: relative;
          cursor: pointer;
        }

        .progress-current {
          height: 100%;
          background: var(--gradient);
          border-radius: 2px;
          position: relative;
        }

        .progress-handle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--primary-color);
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .player-volume {
          width: 25%;
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: flex-end;
        }

        .volume-bar {
          width: 100px;
          height: 4px;
          background-color: #f0f0f0;
          border-radius: 2px;
          position: relative;
          cursor: pointer;
        }

        .volume-current {
          height: 100%;
          background: var(--gradient);
          border-radius: 2px;
          position: relative;
        }

        .volume-handle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--primary-color);
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        /* General Styles */
        :root {
          --primary-color: #6c63ff;
          --secondary-color: #ff6584;
          --dark-color: #333;
          --light-color: #f5f7fa;
          --gradient: linear-gradient(45deg, #6c63ff, #6983ff);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        body {
          background-color: var(--light-color);
          color: var(--dark-color);
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .sidebar {
            width: 200px;
          }
          
          .main-content {
            margin-left: 200px;
          }
          
          .search-container {
            width: 300px;
          }
        }

        @media (max-width: 992px) {
          .song-list-header {
            grid-template-columns: 50px 60px 2fr 1fr 80px;
          }
          
          .song-list-item {
            grid-template-columns: 50px 60px 2fr 1fr 80px;
          }
          
          .song-list-album {
            display: none;
          }
          
          .player-song-info {
            width: 30%;
          }
          
          .player-volume {
            width: 20%;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 70px;
            overflow: hidden;
          }
          
          .sidebar .logo span,
          .sidebar-menu li span,
          .sidebar-section h3,
          .sidebar-playlists {
            display: none;
          }
          
          .sidebar-menu li {
            justify-content: center;
          }
          
          .main-content {
            margin-left: 70px;
          }
          
          .search-container {
            width: 200px;
          }
          
          .user-profile span {
            display: none;
          }
          
          .song-list-header {
            grid-template-columns: 50px 60px 2fr 80px;
          }
          
          .song-list-item {
            grid-template-columns: 50px 60px 2fr 80px;
          }
          
          .song-list-duration {
            display: none;
          }
          
          .songs-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        }

        @media (max-width: 576px) {
          .player-song-info {
            width: 40%;
          }
          
          .player-volume {
            display: none;
          }
          
          .player-controls {
            width: 60%;
          }
          
          .player-progress {
            max-width: 100%;
          }
          
          .top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .search-container {
            width: 100%;
          }
          
          .content-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardUser;