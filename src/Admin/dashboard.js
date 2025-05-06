import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import '../Admin/css/Music.css';
import '../Admin/css/Dashboard.css';
import './settings';
import { 
  Users, 
  ShoppingCart, 
  Settings, 
  Bell,  
  Music, 
  Home, 
  DollarSign,
  Calendar,
  Search,
  Filter,
  Mail,
  Phone,
  MoreHorizontal,
  UserPlus,
  Play,
  Pause,
  Plus,
  Edit,
  Trash2,
  ListMusic,
  Clock,
  ChevronUp,
  ChevronDown,
  Download,
  User
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // Default to dashboard tab
  const [activeView, setActiveView] = useState('tracks');
  const [sortDirection, setSortDirection] = useState('asc');
  const [nowPlaying, setNowPlaying] = useState(null);
  const navigate = useNavigate();

  // Mock data for stats
  const stats = [
    { title: 'Total Users', value: '1,254', icon: <Users size={24} />, trend: '+12%', color: '#6c63ff' },
    { title: 'Revenue', value: '$8,952', icon: <DollarSign size={24} />, trend: '+8%', color: '#ff6584' },
    { title: 'Subscriptions', value: '945', icon: <Music size={24} />, trend: '+15%', color: '#2a2a2a' },
    { title: 'Active Sessions', value: '432', icon: <ShoppingCart size={24} />, trend: '+5%', color: '#6c63ff' },
  ];

  // Mock data for recent activities
  const activities = [
    { user: 'John Doe', action: 'started a premium subscription', time: '5 minutes ago' },
    { user: 'Jane Smith', action: 'added a new playlist', time: '10 minutes ago' },
    { user: 'Robert Johnson', action: 'updated profile', time: '25 minutes ago' },
    { user: 'Emily Williams', action: 'downloaded 3 songs', time: '1 hour ago' },
    { user: 'Michael Brown', action: 'shared a playlist', time: '2 hours ago' },
  ];

  // Mock data for upcoming events
  const events = [
    { title: 'New Artist Release', date: 'May 10, 2025', priority: 'high' },
    { title: 'System Maintenance', date: 'May 12, 2025', priority: 'medium' },
    { title: 'Marketing Campaign', date: 'May 15, 2025', priority: 'high' },
    { title: 'User Feedback Review', date: 'May 20, 2025', priority: 'low' },
  ];

  // Mock data for users
  const users = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      phone: '+1 (555) 123-4567', 
      subscription: 'Premium', 
      status: 'Active',
      joinDate: 'Jan 15, 2025',
      avatar: 'JD'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      phone: '+1 (555) 234-5678', 
      subscription: 'Premium', 
      status: 'Active',
      joinDate: 'Feb 3, 2025',
      avatar: 'JS'
    },
    { 
      id: 3, 
      name: 'Robert Johnson', 
      email: 'robert.j@example.com', 
      phone: '+1 (555) 345-6789', 
      subscription: 'Basic', 
      status: 'Inactive',
      joinDate: 'Mar 21, 2025',
      avatar: 'RJ'
    },
    { 
      id: 4, 
      name: 'Emily Williams', 
      email: 'emily.w@example.com', 
      phone: '+1 (555) 456-7890', 
      subscription: 'Premium', 
      status: 'Active',
      joinDate: 'Apr 7, 2025',
      avatar: 'EW'
    },
    { 
      id: 5, 
      name: 'Michael Brown', 
      email: 'michael.b@example.com', 
      phone: '+1 (555) 567-8901', 
      subscription: 'Premium', 
      status: 'Active',
      joinDate: 'Apr 18, 2025',
      avatar: 'MB'
    },
    { 
      id: 6, 
      name: 'Sarah Davis', 
      email: 'sarah.d@example.com', 
      phone: '+1 (555) 678-9012', 
      subscription: 'Basic', 
      status: 'Active',
      joinDate: 'Apr 30, 2025',
      avatar: 'SD'
    },
  ];

  // Mock data for tracks
  const tracks = [
    { 
      id: 1, 
      title: 'Electric Dreams', 
      artist: 'Aurora Waves', 
      album: 'Neon Horizons',
      genre: 'Electronic',
      duration: '3:45',
      releaseDate: 'Apr 12, 2025',
      downloads: 2584,
      coverArt: 'ED'
    },
    { 
      id: 2, 
      title: 'Midnight Journey', 
      artist: 'Soul Collective', 
      album: 'Urban Rhythms',
      genre: 'R&B',
      duration: '4:32',
      releaseDate: 'Mar 28, 2025',
      downloads: 1982,
      coverArt: 'MJ'
    },
    { 
      id: 3, 
      title: 'Desert Wind', 
      artist: 'Mystic Nomads', 
      album: 'Sands of Time',
      genre: 'World',
      duration: '5:17',
      releaseDate: 'Feb 15, 2025',
      downloads: 1435,
      coverArt: 'DW'
    },
    { 
      id: 4, 
      title: 'Urban Echoes', 
      artist: 'City Beats', 
      album: 'Metro Pulse',
      genre: 'Hip Hop',
      duration: '3:58',
      releaseDate: 'Apr 18, 2025',
      downloads: 3245,
      coverArt: 'UE'
    },
    { 
      id: 5, 
      title: 'Serenity', 
      artist: 'Ocean Mind', 
      album: 'Calm Waters',
      genre: 'Ambient',
      duration: '6:24',
      releaseDate: 'Jan 05, 2025',
      downloads: 2178,
      coverArt: 'SE'
    },
    { 
      id: 6, 
      title: 'Rock Revolution', 
      artist: 'Phoenix Fire', 
      album: 'Rising Flames',
      genre: 'Rock',
      duration: '4:15',
      releaseDate: 'Mar 12, 2025',
      downloads: 2856,
      coverArt: 'RR'
    },
  ];

  // Mock data for albums
  const albums = [
    {
      id: 1,
      title: 'Neon Horizons',
      artist: 'Aurora Waves',
      tracks: 12,
      releaseDate: 'Apr 12, 2025',
      genre: 'Electronic',
      coverArt: 'NH'
    },
    {
      id: 2,
      title: 'Urban Rhythms',
      artist: 'Soul Collective',
      tracks: 10,
      releaseDate: 'Mar 28, 2025',
      genre: 'R&B',
      coverArt: 'UR'
    },
    {
      id: 3,
      title: 'Sands of Time',
      artist: 'Mystic Nomads',
      tracks: 8,
      releaseDate: 'Feb 15, 2025',
      genre: 'World',
      coverArt: 'ST'
    },
    {
      id: 4,
      title: 'Metro Pulse',
      artist: 'City Beats',
      tracks: 14,
      releaseDate: 'Apr 18, 2025',
      genre: 'Hip Hop',
      coverArt: 'MP'
    }
  ];

  // Mock data for artists
  const artists = [
    {
      id: 1,
      name: 'Aurora Waves',
      genre: 'Electronic',
      albums: 3,
      tracks: 32,
      followers: '245K',
      avatar: 'AW'
    },
    {
      id: 2,
      name: 'Soul Collective',
      genre: 'R&B',
      albums: 2,
      tracks: 18,
      followers: '189K',
      avatar: 'SC'
    },
    {
      id: 3,
      name: 'Mystic Nomads',
      genre: 'World',
      albums: 4,
      tracks: 42,
      followers: '156K',
      avatar: 'MN'
    },
    {
      id: 4,
      name: 'City Beats',
      genre: 'Hip Hop',
      albums: 2,
      tracks: 24,
      followers: '321K',
      avatar: 'CB'
    }
  ];

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const togglePlay = (id) => {
    setNowPlaying(nowPlaying === id ? null : id);
  };

  // Dashboard content component
  const DashboardContent = () => (
    <div className="dashboard-content">
      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value-container">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-trend">{stat.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dashboard Widgets */}
      <div className="dashboard-widgets">
        {/* Recent Activities */}
        <div className="widget recent-activities">
          <div className="widget-header">
            <h2>Recent Activities</h2>
            <a href="#" className="view-all">View All</a>
          </div>
          <div className="widget-content">
            <ul className="activity-list">
              {activities.map((activity, index) => (
                <li key={index} className="activity-item">
                  <div className="activity-user">{activity.user}</div>
                  <div className="activity-action">{activity.action}</div>
                  <div className="activity-time">{activity.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="widget upcoming-events">
          <div className="widget-header">
            <h2>Upcoming Events</h2>
            <Calendar size={20} />
          </div>
          <div className="widget-content">
            <ul className="events-list">
              {events.map((event, index) => (
                <li key={index} className="event-item">
                  <div className={`event-priority ${event.priority}`}></div>
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <span>{event.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Users content component
  const UsersContent = () => (
    <div className="users-content">
      <div className="users-header">
        <div className="users-filters">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search users..." />
          </div>
          <div className="filter-container">
            <button className="btn-filter">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <select className="subscription-filter">
              <option value="">All Subscriptions</option>
              <option value="premium">Premium</option>
              <option value="basic">Basic</option>
            </select>
            <select className="status-filter">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <button className="btn-add-user">
          <UserPlus size={18} />
          <span>Add User</span>
        </button>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subscription</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="user-cell">
                  <div className="user-avatar">{user.avatar}</div>
                  <span className="user-name">{user.name}</span>
                </td>
                <td className="email-cell">
                  <Mail size={16} />
                  <span>{user.email}</span>
                </td>
                <td className="phone-cell">
                  <Phone size={16} />
                  <span>{user.phone}</span>
                </td>
                <td>
                  <span className={`badge subscription-${user.subscription.toLowerCase()}`}>
                    {user.subscription}
                  </span>
                </td>
                <td>
                  <span className={`badge status-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td>
                  <button className="btn-action">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span className="pagination-info">Showing 1-6 of 1,254 users</span>
        <div className="pagination-controls">
          <button className="pagination-btn" disabled>Previous</button>
          <button className="pagination-btn pagination-btn-active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <span>...</span>
          <button className="pagination-btn">209</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );

  // Music content component
  const MusicContent = () => {
    // Tracks view component
    const TracksView = () => (
      <div className="music-tracks">
        <div className="tracks-table-container">
          <table className="tracks-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>
                  <div className="sortable-header" onClick={toggleSortDirection}>
                    <span>Duration</span>
                    {sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </th>
                <th>Genre</th>
                <th>
                  <div className="sortable-header" onClick={toggleSortDirection}>
                    <span>Release Date</span>
                    {sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </th>
                <th>
                  <div className="sortable-header" onClick={toggleSortDirection}>
                    <span>Downloads</span>
                    {sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr key={track.id}>
                  <td>
                    <button 
                      className="play-button" 
                      onClick={() => togglePlay(track.id)}
                    >
                      {nowPlaying === track.id ? 
                        <Pause size={16} className="text-blue-500" /> : 
                        <Play size={16} />}
                    </button>
                  </td>
                  <td className="track-cell">
                    <div className="track-cover" style={{ backgroundColor: `#6c63ff20` }}>{track.coverArt}</div>
                    <span className="track-title">{track.title}</span>
                  </td>
                  <td>{track.artist}</td>
                  <td>{track.album}</td>
                  <td>
                    <div className="duration-cell">
                      <Clock size={14} />
                      <span>{track.duration}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`badge genre-${track.genre.toLowerCase().replace(' ', '-')}`}>
                      {track.genre}
                    </span>
                  </td>
                  <td>
                    <div className="date-cell">
                      <Calendar size={14} />
                      <span>{track.releaseDate}</span>
                    </div>
                  </td>
                  <td>
                    <div className="downloads-cell">
                      <Download size={14} />
                      <span>{track.downloads.toLocaleString()}</span>
                    </div>
                  </td>
                  <td>
                    <div className="track-actions">
                      <button className="action-btn">
                        <Edit size={16} />
                      </button>
                      <button className="action-btn">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span className="pagination-info">Showing 1-6 of 245 tracks</span>
          <div className="pagination-controls">
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn pagination-btn-active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span>...</span>
            <button className="pagination-btn">41</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    );

    // Albums view component
    const AlbumsView = () => (
      <div className="albums-grid">
        {albums.map((album) => (
          <div className="album-card" key={album.id}>
            <div className="album-cover" style={{ backgroundColor: `#ff658420` }}>
              <div className="album-art">{album.coverArt}</div>
              <button className="album-play-btn">
                <Play size={24} />
              </button>
            </div>
            <div className="album-info">
              <h3>{album.title}</h3>
              <p className="album-artist">{album.artist}</p>
              <div className="album-meta">
                <div className="meta-item">
                  <ListMusic size={14} />
                  <span>{album.tracks} tracks</span>
                </div>
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{album.releaseDate}</span>
                </div>
              </div>
              <span className={`badge genre-${album.genre.toLowerCase().replace(' ', '-')}`}>
                {album.genre}
              </span>
            </div>
            <div className="album-actions">
              <button className="action-btn">
                <Edit size={16} />
              </button>
              <button className="action-btn">
                <Trash2 size={16} />
              </button>
              <button className="action-btn">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );

    // Artists view component
    const ArtistsView = () => (
      <div className="artists-grid">
        {artists.map((artist) => (
          <div className="artist-card" key={artist.id}>
            <div className="artist-header">
              <div className="artist-avatar" style={{ backgroundColor: `#6c63ff30` }}>
                {artist.avatar}
              </div>
              <div className="artist-name-container">
                <h3>{artist.name}</h3>
                <span className={`badge genre-${artist.genre.toLowerCase().replace(' ', '-')}`}>
                  {artist.genre}
                </span>
              </div>
            </div>
            
            <div className="artist-stats">
              <div className="stat-item">
                <div className="stat-value">{artist.albums}</div>
                <div className="stat-label">Albums</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{artist.tracks}</div>
                <div className="stat-label">Tracks</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{artist.followers}</div>
                <div className="stat-label">Followers</div>
              </div>
            </div>
            
            <div className="artist-actions">
              <button className="btn-primary">View Profile</button>
              <button className="btn-secondary">
                <Edit size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div className="music-content">
        <div className="music-header">
          <div className="view-tabs">
            <button 
              className={`view-tab ${activeView === 'tracks' ? 'active' : ''}`}
              onClick={() => setActiveView('tracks')}
            >
              <ListMusic size={18} />
              <span>Tracks</span>
            </button>
            <button 
              className={`view-tab ${activeView === 'albums' ? 'active' : ''}`}
              onClick={() => setActiveView('albums')}
            >
              <Music size={18} />
              <span>Albums</span>
            </button>
            <button 
              className={`view-tab ${activeView === 'artists' ? 'active' : ''}`}
              onClick={() => setActiveView('artists')}
            >
              <User size={18} />
              <span>Artists</span>
            </button>
          </div>
          
          <div className="music-filters">
            <div className="search-box">
              <Search size={18} />
              <input type="text" placeholder="Search music..." />
            </div>
            <div className="filter-container">
              <button className="btn-filter">
                <Filter size={18} />
                <span>Filter</span>
              </button>
              <select className="genre-filter">
                <option value="">All Genres</option>
                <option value="electronic">Electronic</option>
                <option value="rock">Rock</option>
                <option value="hip-hop">Hip Hop</option>
                <option value="r&b">R&B</option>
                <option value="world">World</option>
                <option value="ambient">Ambient</option>
              </select>
            </div>
          </div>
          
          <button className="btn-add-music">
            <Plus size={18} />
            <span>Add {activeView === 'tracks' ? 'Track' : activeView === 'albums' ? 'Album' : 'Artist'}</span>
          </button>
        </div>

        {/* Content based on active view */}
        {activeView === 'tracks' && <TracksView />}
        {activeView === 'albums' && <AlbumsView />}
        {activeView === 'artists' && <ArtistsView />}

        {/* Now Playing Bar (only shown when a track is playing) */}
        {nowPlaying && (
          <div className="now-playing-bar">
            <div className="now-playing-info">
              <div className="now-playing-cover">
                {tracks.find(t => t.id === nowPlaying)?.coverArt}
              </div>
              <div className="now-playing-details">
                <div className="now-playing-title">
                  {tracks.find(t => t.id === nowPlaying)?.title}
                </div>
                <div className="now-playing-artist">
                  {tracks.find(t => t.id === nowPlaying)?.artist}
                </div>
              </div>
            </div>
            <div className="now-playing-controls">
              <button className="control-btn" onClick={() => setNowPlaying(null)}>
                <Pause size={24} className="text-blue-500" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Settings content component (placeholder)
  const SettingsContent = () => (
    <div className="placeholder-content">
      <h2>Settings</h2>
      <p>Settings management interface will be implemented here.</p>
    </div>
  );

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
            className={activeTab === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveTab('dashboard')}
          >
            <Home size={20} />
            <span>Dashboard</span>
          </li>
          <li 
            className={activeTab === 'users' ? 'active' : ''} 
            onClick={() => setActiveTab('users')}
          >
            <Users size={20} />
            <span>Users</span>
          </li>
          <li 
            className={activeTab === 'music' ? 'active' : ''} 
            onClick={() => setActiveTab('music')}
          >
            <Music size={20} />
            <span>Music</span>
          </li>
          <li 
      className={activeTab === 'settings' ? 'active' : ''} 
      onClick={() => {
        setActiveTab('settings');
        navigate('/admin/setting');
      }}
    >
      <Settings size={20} />
      <span>Settings</span>
    </li>
        </ul>
        
        <div className="sidebar-footer">
          <button
            className="btn-logout-settings"
            onClick={() => navigate('/')}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        {/* Top Bar */}
        <div className="admin-topbar">
          <div className="page-title">
            <h1>{activeTab === 'dashboard' ? 'Admin Dashboard' : 
                activeTab === 'users' ? 'User Management' :
                activeTab === 'music' ? 'Music Management' : 'Settings'}</h1>
            <p>{activeTab === 'users' ? 'Manage and track user accounts' : 
                activeTab === 'music' ? 'Manage tracks, albums, and artists' : 'Welcome back, Admin'}</p>
          </div>
          
          <div className="topbar-actions">
            <div className="notification-bell">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </div>
            
            <div className="admin-profile">
              <div className="admin-avatar">AD</div>
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'dashboard' && <DashboardContent />}
        {activeTab === 'users' && <UsersContent />}
        {activeTab === 'music' && <MusicContent />}
        {activeTab === 'settings' && <SettingsContent />}
      </div>
    </div>
  );
};

export default Admin;
