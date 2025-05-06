import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin/dashboard';
import Home from './Home';
import User from './User/dashboardUser';
import Settings from './Admin/settings';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/admin/setting" element={<Settings />} />
    </Routes>
    </div>
  );
}

export default App;