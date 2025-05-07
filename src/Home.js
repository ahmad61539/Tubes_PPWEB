import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    useEffect(() => {
        // Modal elements
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const openLoginModal = document.getElementById('openLoginModal');
        const openRegisterModal = document.getElementById('openRegisterModal');
        const openRegisterModalHero = document.getElementById('openRegisterModalHero');
        const openRegisterModalCta = document.getElementById('openRegisterModalCta');
        const closeLoginModal = document.getElementById('closeLoginModal');
        const closeRegisterModal = document.getElementById('closeRegisterModal');
        const switchToRegister = document.getElementById('switchToRegister');
        const switchToLogin = document.getElementById('switchToLogin');
        
        // Open modal function with animation
        const openModal = (modal) => {
          if (!modal) return;
          
          // Make the modal visible first but still transparent
          modal.style.display = 'flex';
          
          // Trigger reflow to ensure transitions work
          void modal.offsetWidth;
          
          // Add active class to trigger animations
          modal.classList.add('active');
        };
        
        // Close modal function with animation
        const closeModal = (modal) => {
          if (!modal) return;
          
          // Remove active class to start hiding animations
          modal.classList.remove('active');
          
          // Wait for animations to complete before hiding the modal completely
          setTimeout(() => {
            if (!modal.classList.contains('active')) {
              modal.style.display = 'none';
            }
          }, 500); // This should match the animation duration
        };
    
        // Attach event listeners to open buttons
        if (openLoginModal) openLoginModal.addEventListener('click', (e) => {
          e.preventDefault();
          openModal(loginModal);
        });
        
        if (openRegisterModal) openRegisterModal.addEventListener('click', (e) => {
          e.preventDefault();
          openModal(registerModal);
        });
        
        if (openRegisterModalHero) openRegisterModalHero.addEventListener('click', (e) => {
          e.preventDefault();
          openModal(registerModal);
        });
        
        if (openRegisterModalCta) openRegisterModalCta.addEventListener('click', (e) => {
          e.preventDefault();
          openModal(registerModal);
        });
    
        // Attach event listeners to close buttons
        if (closeLoginModal) closeLoginModal.addEventListener('click', () => {
          closeModal(loginModal);
        });
        
        if (closeRegisterModal) closeRegisterModal.addEventListener('click', () => {
          closeModal(registerModal);
        });
    
        // Switch between modals with animation
        if (switchToRegister) switchToRegister.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Start the transition out
          closeModal(loginModal);
          
          // Wait for animation to complete before showing the next modal
          setTimeout(() => {
            openModal(registerModal);
          }, 300);
        });
    
        if (switchToLogin) switchToLogin.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Start the transition out
          closeModal(registerModal);
          
          // Wait for animation to complete before showing the next modal
          setTimeout(() => {
            openModal(loginModal);
          }, 300);
        });
    
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
          if (e.target === loginModal) closeModal(loginModal);
          if (e.target === registerModal) closeModal(registerModal);
        });
    
        // Scroll animations
        const featureCards = document.querySelectorAll('.feature-card');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, { threshold: 0.2 });
    
        featureCards.forEach(card => {
          card.style.opacity = 0;
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          observer.observe(card);
        });
    
        // Smooth scroll (with safe check)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const selector = this.getAttribute('href');
            if (selector && selector.length > 1) { // Avoid invalid selectors like "#"
              const target = document.querySelector(selector);
              if (target) {
                window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }
          });
        });
    
        // Cleanup function to remove event listeners
        return () => {
          if (openLoginModal) openLoginModal.removeEventListener('click', () => {});
          if (openRegisterModal) openRegisterModal.removeEventListener('click', () => {});
          if (openRegisterModalHero) openRegisterModalHero.removeEventListener('click', () => {});
          if (openRegisterModalCta) openRegisterModalCta.removeEventListener('click', () => {});
          if (closeLoginModal) closeLoginModal.removeEventListener('click', () => {});
          if (closeRegisterModal) closeRegisterModal.removeEventListener('click', () => {});
          if (switchToRegister) switchToRegister.removeEventListener('click', () => {});
          if (switchToLogin) switchToLogin.removeEventListener('click', () => {});
      
          window.removeEventListener('click', () => {});
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', () => {});
          });
        };
      }, []);

      const handleLogin = (e) => {
        e.preventDefault();
        // Simulated user validation (can be replaced with backend/API)
        if (email === 'admin@example.com' && password === 'admin123') {
            navigate('/admin');
        } else if (email === 'user@example.com' && password === 'user123') {
            navigate('/user');
        } else {
            alert('Invalid email or password');
        }
    };

  return (
    <div>
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
              <button className="btn btn-login" id="openLoginModal">Login</button>
              <button className="btn btn-register" id="openRegisterModal">Register</button>
            </div>
            <div className="mobile-menu" style={{ display: 'none' }}>
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="hero-content">
            <h1 className="hero-title">Discover Your Sound Universe</h1>
            <p className="hero-subtitle">Stream millions of songs, follow artists, and enjoy personalized recommendations.</p>
            <button className="btn btn-register" id="openRegisterModalHero">Start Free</button>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Why Choose Melodify</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-headphones"></i></div>
              <h3 className="feature-title">HD Sound Quality</h3>
              <p className="feature-desc">Crystal clear audio with HD streaming for a superior experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
              <h3 className="feature-title">Listen Everywhere</h3>
              <p className="feature-desc">Stream on all devices with perfect sync.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-heart"></i></div>
              <h3 className="feature-title">Personalized For You</h3>
              <p className="feature-desc">Recommendations made just for your taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="plans" id="plans">
      <div className="container">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="plans-grid">
          {/* Free Plan */}
          <div className="premium-plan">
            <h3 className="plan-title">Free</h3>
            <div className="plan-price">
              $0
              <span className="price-period">/month</span>
              <div className="plan-price-underline"></div>
            </div>
            <ul className="plan-features">
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Ad-supported listening</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Standard audio quality</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Mobile streaming</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Limited skips</li>
            </ul>
            <button className="button">Start Free</button>
          </div>

          {/* Premium Plan */}
          <div className="premium-plan">
            <span className="popular-badge">MOST POPULAR</span>
            <h3 className="plan-title">Premium</h3>
            <div className="plan-price">
              $9.99
              <span className="price-period">/month</span>
              <div className="plan-price-underline"></div>
            </div>
            <ul className="plan-features">
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Ad-free listening</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> HD audio quality</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Unlimited skips</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Download for offline</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Multi-device support</li>
            </ul>
            <button className="button">Choose Premium</button>
          </div>

          {/* Family Plan */}
          <div className="premium-plan">
            <h3 className="plan-title">Family</h3>
            <div className="plan-price">
              $14.99
              <span className="price-period">/month</span>
              <div className="plan-price-underline"></div>
            </div>
            <ul className="plan-features">
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Up to 6 accounts</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Ad-free listening</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> HD audio quality</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Unlimited skips</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Download for offline</li>
              <li className="plan-feature-item"><span className="plan-feature-check">✓</span> Parental controls</li>
            </ul>
            <button className="button">Choose Family</button>
          </div>
        </div>
      </div>
    </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-container">
            <div className="testimonial">
              <p className="testimonial-text">"Melodify changed how I listen to music. Perfectly tailored playlists and amazing sound!"</p>
              <p className="testimonial-author">- Sarah Johnson</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">"I've found so many new artists through Melodify!"</p>
              <p className="testimonial-author">- Michael Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Musical Journey?</h2>
          <p className="cta-subtitle">Join millions of music lovers who have already discovered the Melodify experience. Your first month is on us!</p>
          <button className="btn btn-cta" id="openRegisterModalCta">Get Started Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container" id="about">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Melodify</h3>
              <p>Your ultimate music streaming service with millions of songs and podcasts at your fingertips.</p>
              <div className="social-links">
                <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Communities</h3>
              <ul className="footer-links">
                <li><a href="#">For Artists</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Vendors</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Useful Links</h3>
              <ul className="footer-links">
                <li><a href="#">Support</a></li>
                <li><a href="#">Web Player</a></li>
                <li><a href="#">Mobile App</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            &copy; 2025 Melodify. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <div className="modal" id="loginModal">
                <div className="modal-container">
                    <span className="close-modal" id="closeLoginModal">&times;</span>
                    <h2 className="modal-title">Login to Melodify</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="loginEmail">Email</label>
                            <input
                                type="email"
                                id="loginEmail"
                                className="form-input"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                            <input
                                type="password"
                                id="loginPassword"
                                className="form-input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-submit">Login</button>
                    </form>
                    <div className="modal-footer">
                        Don't have an account? <a href="#" id="switchToRegister">Register now</a>
                    </div>
                </div>
            </div>

      {/* Register Modal */}
      <div className="modal" id="registerModal">
        <div className="modal-container">
          <span className="close-modal" id="closeRegisterModal">&times;</span>
          <h2 className="modal-title">Create an Account</h2>
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="registerName">Full Name</label>
              <input type="text" id="registerName" className="form-input" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="registerEmail">Email</label>
              <input type="email" id="registerEmail" className="form-input" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="registerPassword">Password</label>
              <input type="password" id="registerPassword" className="form-input" placeholder="Create a password" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="registerConfirmPassword">Confirm Password</label>
              <input type="password" id="registerConfirmPassword" className="form-input" placeholder="Confirm your password" />
            </div>
            <br></br>
            <button type="submit" className="btn btn-submit">Create Account</button>
          </form>
          <div className="modal-footer">
            Already have an account? <a href="#" id="switchToLogin">Login instead</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;