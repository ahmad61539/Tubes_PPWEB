import React, { useState } from 'react';
import './css/settings.css';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import {
    Image,
    File,
    Music, 
    Clock,
  User,
  Globe,
  Bell,
  Shield,
  Database,
  HardDrive,
  Mail,
  Key,
  Smartphone,
  Save,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Upload,
  ChevronRight,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const navigate = useNavigate();
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'Admin User',
    email: 'admin@musicapp.com',
    phone: '+1 (555) 123-4567',
    password: '••••••••••',
    language: 'English',
    timezone: '(UTC-05:00) Eastern Time (US & Canada)',
    notifications: {
      email: true,
      push: true,
      desktop: false,
      updates: true,
      newsletter: false,
      securityAlerts: true
    },
    twoFactor: false,
    sessionTimeout: '2 hours',
    storageUsed: 75, // in GB
    storageTotal: 100, // in GB
    paymentMethod: 'Visa ending in 4242',
    billingCycle: 'Monthly',
    lastInvoice: 'May 01, 2025'
  });

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setUserData({
      ...userData,
      notifications: {
        ...userData.notifications,
        [name]: checked
      }
    });
  };

  const handleSaveSettings = () => {
    // Simulate saving settings
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  const handleToggleTwoFactor = () => {
    setUserData({
      ...userData,
      twoFactor: !userData.twoFactor
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`settings-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="settings-sidebar">
        <h2>Settings</h2>
        
        <div className="settings-categories">
          <button 
            className={`settings-category-btn ${activeSection === 'account' ? 'active' : ''}`} 
            onClick={() => setActiveSection('account')}
          >
            <User size={20} />
            <span>Account</span>
            <ChevronRight size={16} className="chevron-icon" />
          </button>
          
          <button 
            className={`settings-category-btn ${activeSection === 'app' ? 'active' : ''}`} 
            onClick={() => setActiveSection('app')}
          >
            <Globe size={20} />
            <span>Appearance & Language</span>
            <ChevronRight size={16} className="chevron-icon" />
          </button>
          
          <button 
            className={`settings-category-btn ${activeSection === 'notifications' ? 'active' : ''}`} 
            onClick={() => setActiveSection('notifications')}
          >
            <Bell size={20} />
            <span>Notifications</span>
            <ChevronRight size={16} className="chevron-icon" />
          </button>
          
          <button 
            className={`settings-category-btn ${activeSection === 'security' ? 'active' : ''}`} 
            onClick={() => setActiveSection('security')}
          >
            <Shield size={20} />
            <span>Security</span>
            <ChevronRight size={16} className="chevron-icon" />
          </button>
          
          <button 
            className={`settings-category-btn ${activeSection === 'storage' ? 'active' : ''}`} 
            onClick={() => setActiveSection('storage')}
          >
            <Database size={20} />
            <span>Storage & Data</span>
            <ChevronRight size={16} className="chevron-icon" />
          </button>
        </div>
        
        <div className="settings-footer">
          <button
  className="btn-logout-settings"
  onClick={() => navigate('/admin')}
>
  <LogOut size={20} />
  <span>Logout</span>
</button>
        </div>
      </div>
      
      <div className="settings-content">
        {saveSuccess && (
          <div className="save-notification">
            <CheckCircle size={20} />
            <span>Settings saved successfully!</span>
          </div>
        )}
        
        {/* Account Settings */}
        {activeSection === 'account' && (
          <div className="settings-section">
            <div className="section-header">
              <h2>Account Settings</h2>
              <p>Manage your personal information and credentials</p>
            </div>
            
            <div className="settings-form">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={userData.name} 
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} />
                  <input 
                    type="email" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-with-icon">
                  <Smartphone size={18} />
                  <input 
                    type="tel" 
                    name="phone" 
                    value={userData.phone} 
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <Key size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    value={userData.password} 
                    onChange={handleInputChange}
                  />
                  <button 
                    className="toggle-password" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="btn-save" onClick={handleSaveSettings}>
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
            
            <div className="danger-zone">
              <h3>Danger Zone</h3>
              <p>These actions are irreversible. Please proceed with caution.</p>
              
              <div className="danger-actions">
                <button className="btn-danger">
                  <AlertTriangle size={18} />
                  <span>Delete Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* App Settings */}
        {activeSection === 'app' && (
          <div className="settings-section">
            <div className="section-header">
              <h2>Appearance & Language</h2>
              <p>Customize your app experience</p>
            </div>
            
            <div className="settings-form">
              <div className="form-group">
                <label>Language</label>
                <select 
                  name="language" 
                  value={userData.language} 
                  onChange={handleInputChange}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Time Zone</label>
                <select 
                  name="timezone" 
                  value={userData.timezone} 
                  onChange={handleInputChange}
                >
                  <option value="(UTC-08:00) Pacific Time (US & Canada)">(UTC-08:00) Pacific Time (US & Canada)</option>
                  <option value="(UTC-07:00) Mountain Time (US & Canada)">(UTC-07:00) Mountain Time (US & Canada)</option>
                  <option value="(UTC-06:00) Central Time (US & Canada)">(UTC-06:00) Central Time (US & Canada)</option>
                  <option value="(UTC-05:00) Eastern Time (US & Canada)">(UTC-05:00) Eastern Time (US & Canada)</option>
                  <option value="(UTC+00:00) London, Dublin, Edinburgh">(UTC+00:00) London, Dublin, Edinburgh</option>
                  <option value="(UTC+01:00) Paris, Amsterdam, Berlin">(UTC+01:00) Paris, Amsterdam, Berlin</option>
                </select>
              </div>
              
              <div className="theme-options">
                <h3>Theme</h3>
                <div className="theme-selector">
                  <label className={`theme-option ${!isDarkMode ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="theme" 
                      value="light" 
                      checked={!isDarkMode} 
                      onChange={() => setIsDarkMode(false)} 
                    />
                    <div className="theme-preview light"></div>
                    <span>Light</span>
                  </label>
                  
                  <label className={`theme-option ${isDarkMode ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="theme" 
                      value="dark" 
                      checked={isDarkMode} 
                      onChange={() => setIsDarkMode(true)} 
                    />
                    <div className="theme-preview dark"></div>
                    <span>Dark</span>
                  </label>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="btn-save" onClick={handleSaveSettings}>
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Notifications Settings */}
        {activeSection === 'notifications' && (
          <div className="settings-section">
            <div className="section-header">
              <h2>Notification Settings</h2>
              <p>Manage how you receive notifications</p>
            </div>
            
            <div className="notification-settings">
              <h3>Notification Channels</h3>
              
              <div className="notification-option">
                <div className="notification-info">
                  <Mail size={20} />
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Receive notifications via email</p>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    name="email" 
                    checked={userData.notifications.email} 
                    onChange={handleNotificationChange}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="notification-info">
                  <Smartphone size={20} />
                  <div>
                    <h4>Push Notifications</h4>
                    <p>Receive notifications on your mobile device</p>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    name="push" 
                    checked={userData.notifications.push} 
                    onChange={handleNotificationChange}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="notification-info">
                  <Bell size={20} />
                  <div>
                    <h4>Desktop Notifications</h4>
                    <p>Receive notifications on your computer</p>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    name="desktop" 
                    checked={userData.notifications.desktop} 
                    onChange={handleNotificationChange}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <h3>Notification Types</h3>
              
              <div className="notification-option">
                <div className="notification-info">
                  <RefreshCw size={20} />
                  <div>
                    <h4>Product Updates</h4>
                    <p>New features, improvements, and updates</p>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    name="updates" 
                    checked={userData.notifications.updates} 
                    onChange={handleNotificationChange}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="notification-info">
                  <Mail size={20} />
                  <div>
                    <h4>Newsletter</h4>
                    <p>Monthly digest of music industry news</p>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    name="newsletter" 
                    checked={userData.notifications.newsletter} 
                    onChange={handleNotificationChange}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="notification-info">
                  <Shield size={20} />
                  <div>
                    <h4>Security Alerts</h4>
                    <p>Important security notifications</p>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    name="securityAlerts" 
                    checked={userData.notifications.securityAlerts} 
                    onChange={handleNotificationChange}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="form-actions">
                <button className="btn-save" onClick={handleSaveSettings}>
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Security Settings */}
        {activeSection === 'security' && (
          <div className="settings-section">
            <div className="section-header">
              <h2>Security Settings</h2>
              <p>Manage your account security and privacy</p>
            </div>
            
            <div className="security-settings">
              <div className="security-option">
                <div className="security-info">
                  <Shield size={20} />
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={userData.twoFactor} 
                    onChange={handleToggleTwoFactor}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              {userData.twoFactor && (
                <div className="two-factor-setup">
                  <p>Two-factor authentication is enabled. Your account is more secure now.</p>
                  <button className="btn-secondary">
                    <RefreshCw size={18} />
                    <span>Reset 2FA</span>
                  </button>
                </div>
              )}
              
              <div className="security-option">
                <div className="security-info">
                  <Clock size={20} />
                  <div>
                    <h4>Session Timeout</h4>
                    <p>Automatically log out after inactivity</p>
                  </div>
                </div>
                <select 
                  name="sessionTimeout" 
                  value={userData.sessionTimeout} 
                  onChange={handleInputChange}
                  className="timeout-select"
                >
                  <option value="30 minutes">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                  <option value="4 hours">4 hours</option>
                  <option value="8 hours">8 hours</option>
                  <option value="Never">Never</option>
                </select>
              </div>
              
              <h3>Login History</h3>
              <div className="login-history">
                <div className="login-entry">
                  <div className="login-info">
                    <h4>New York, USA</h4>
                    <p>Chrome on Windows • May 5, 2025, 9:24 AM</p>
                  </div>
                  <span className="login-status current">Current</span>
                </div>
                
                <div className="login-entry">
                  <div className="login-info">
                    <h4>New York, USA</h4>
                    <p>Chrome on Windows • May 3, 2025, 2:15 PM</p>
                  </div>
                </div>
                
                <div className="login-entry">
                  <div className="login-info">
                    <h4>Chicago, USA</h4>
                    <p>Safari on iPhone • May 1, 2025, 6:42 PM</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-secondary view-all-btn">
                <Eye size={18} />
                <span>View All Activity</span>
              </button>
              
              <div className="form-actions">
                <button className="btn-save" onClick={handleSaveSettings}>
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Storage Settings */}
        {activeSection === 'storage' && (
          <div className="settings-section">
            <div className="section-header">
              <h2>Storage & Data</h2>
              <p>Manage your storage usage and data preferences</p>
            </div>
            
            <div className="storage-settings">
              <div className="storage-usage">
                <h3>Storage Usage</h3>
                <div className="storage-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(userData.storageUsed / userData.storageTotal) * 100}%` }}
                  ></div>
                </div>
                <div className="storage-stats">
                  <span>{userData.storageUsed} GB used of {userData.storageTotal} GB</span>
                  <span>{userData.storageTotal - userData.storageUsed} GB available</span>
                </div>
              </div>
              
              <div className="storage-breakdown">
                <h3>Storage Breakdown</h3>
                
                <div className="storage-item">
                  <div className="storage-item-info">
                    <div className="storage-item-icon music">
                      <Music size={18} />
                    </div>
                    <div className="storage-item-details">
                      <h4>Music Files</h4>
                      <div className="storage-item-progress">
                        <div className="progress-bar" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                  <span className="storage-item-size">48.7 GB</span>
                </div>
                
                <div className="storage-item">
                  <div className="storage-item-info">
                    <div className="storage-item-icon image">
                      <Image size={18} />
                    </div>
                    <div className="storage-item-details">
                      <h4>Album Artwork</h4>
                      <div className="storage-item-progress">
                        <div className="progress-bar" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  <span className="storage-item-size">18.5 GB</span>
                </div>
                
                <div className="storage-item">
                  <div className="storage-item-info">
                    <div className="storage-item-icon document">
                      <File size={18} />
                    </div>
                    <div className="storage-item-details">
                      <h4>Documents</h4>
                      <div className="storage-item-progress">
                        <div className="progress-bar" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                  <span className="storage-item-size">7.8 GB</span>
                </div>
              </div>
              
              <div className="data-options">
                <h3>Data Management</h3>
                
                <div className="data-option">
                  <div className="data-option-info">
                    <HardDrive size={20} />
                    <div>
                      <h4>Auto Backup</h4>
                      <p>Automatically backup your data to cloud storage</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={true} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                <div className="data-option">
                  <div className="data-option-info">
                    <Upload size={20} />
                    <div>
                      <h4>High Quality Upload</h4>
                      <p>Upload music in highest quality (uses more storage)</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={true} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="btn-secondary">
                  <RefreshCw size={18} />
                  <span>Clear Cache</span>
                </button>
                <button className="btn-save" onClick={handleSaveSettings}>
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;