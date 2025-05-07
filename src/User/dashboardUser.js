import React, { useState, useEffect } from 'react';
import '../Admin/css/Dashboard.css';
import './css/dashboarduser.css';
import { LogOut } from 'lucide-react';
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
  const [displayedSongs, setDisplayedSongs] = useState([]);
  
  
  // Mock data for songs
  const songs = [
    {
      id: 1,
      title: "Summer Breeze",
      artist: "Ocean Sounds",
      album: "Tropical Vibes",
      duration: "4:20",
      liked: true,
      coverImg: "https://nikwax.files.wordpress.com/2013/08/endofsummer.jpg?w=611"
    },
    {
      id: 2,
      title: "Midnight City",
      artist: "Urban Echoes",
      album: "Downtown",
      duration: "3:56",
      liked: false,
      coverImg: "https://png.pngtree.com/illustrations/20190321/ourmid/pngtree-midnight-city-the-view-of-the-city-building-illustration-png-image_28270.jpg"
    },
    {
      id: 3,
      title: "Electric Dreamscape",
      artist: "Synthwave Riders",
      album: "Neon Horizons",
      duration: "3:45",
      liked: true,
      coverImg: "https://source.boomplaymusic.com/group10/M00/05/08/2bc009e6e2604973bf7ca2d2f8272504_320_320.jpg"
    },
    {
      id: 4,
      title: "Mountain Echo",
      artist: "Nature Sounds",
      album: "Wilderness",
      duration: "5:12",
      liked: false,
      coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/960px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg"
    },
    {
      id: 5,
      title: "Jazz Cafe",
      artist: "Smooth Quartet",
      album: "Late Night Sessions",
      duration: "6:08",
      liked: true,
      coverImg: "https://nibble-images.b-cdn.net/nibble/original_images/cafe-di-menteng-00.jpg"
    },
    {
      id: 6,
      title: "Techno Rhythm",
      artist: "Electronic Beats",
      album: "Dance Floor",
      duration: "4:45",
      liked: false,
      coverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5cLI09aKnfnu_OL41QS4UTatg9ZdGeU21w&s"
    },
    {
      id: 7,
      title: "Acoustic Sunset",
      artist: "String Harmony",
      album: "Unplugged",
      duration: "3:22",
      liked: true,
      coverImg: "https://static.vecteezy.com/system/resources/thumbnails/027/104/834/small_2x/musician-playing-acoustic-guitar-silhouette-at-sunset-free-photo.jpg"
    },
    {
      id: 8,
      title: "Rainy Day",
      artist: "Ambient Sounds",
      album: "Weather Moods",
      duration: "5:30",
      liked: false,
      coverImg: "https://i0.wp.com/eos.org/wp-content/uploads/2022/01/rain.jpg?fit=1200%2C675&ssl=1"
    }
  ];

  // Update displayed songs based on current tab
  useEffect(() => {
    if (currentTab === 'liked') {
      setDisplayedSongs(songs.filter(song => song.liked));
    } else {
      setDisplayedSongs(songs);
    }
  }, [currentTab, songs]);

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Toggle like state for a song with animation
  const toggleLike = (id) => {
    const updatedSongs = songs.map(song => 
      song.id === id ? { ...song, liked: !song.liked } : song
    );
    
    // In a real app, you would update state here
    console.log("Toggled like for song ID:", id);
    
    // Update displayed songs based on current tab
    if (currentTab === 'liked') {
      setDisplayedSongs(updatedSongs.filter(song => song.liked));
    } else {
      setDisplayedSongs(updatedSongs);
    }
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
                  <Pause size={12} />
                </button>
              ) : (
                <button className="btn-play" onClick={() => playSong(song)}>
                  <Play size={12} />
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
              <Heart 
                size={18} 
                fill={song.liked ? "var(--secondary-color)" : "none"} 
                className={song.liked ? 'heart-animate' : ''}
              />
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
                <Pause size={12} />
              </button>
            ) : (
              <button className="btn-play" onClick={() => playSong(song)}>
                <Play size={12} />
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
              <Heart 
                size={18} 
                fill={song.liked ? "var(--secondary-color)" : "none"} 
                className={song.liked ? 'heart-animate' : ''}
              />
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
          <div className="sidebar-footer">
          <button
  className="btn-logout-settings"
  onClick={() => {
    window.location.href = '/';
  }}
>
  <LogOut size={20} />
  <span>Logout</span>
</button>
        </div>
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
            {displayedSongs.map(song => renderSongItem(song))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default DashboardUser;