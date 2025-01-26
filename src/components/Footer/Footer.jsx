import footer_logo from '../../assets/my_icon.png';
import user_icon from '../../assets/user_icon.svg';
import './Footer.css';

const Footer = () => {
  const handleSubscribe = () => {
    const emailInput = document.querySelector('.footer-email-input input');
    const email = emailInput.value.trim();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
          <p>
            Elevate your experience with our services. Stay informed with updates
            directly in your inbox. Subscribe now to keep in touch!
          </p>
        </div>
        {/* Right Section */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Tofik Ahmed. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#hire" className="footer-link">Hire Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
