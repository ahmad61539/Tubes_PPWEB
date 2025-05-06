import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <i className="fas fa-music"></i> Melodify
            </div>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#plans">Pricing</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#about">About</a></li>
            </ul>
            <div className="auth-buttons">
              <button className="btn btn-login" onClick={openLoginModal}>Login</button>
              <button className="btn btn-register" onClick={openRegisterModal}>Register</button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;