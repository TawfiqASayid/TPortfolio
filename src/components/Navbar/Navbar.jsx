import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'home', href: '#home' },
    { label: 'about me', href: '#about' },
    { label: 'services', href: '#services' },
    { label: 'portfolio', href: '#Projects' },
    { label: 'contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className="navbar-logo" />

      <div className="burger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.label}
            className={menu === item.label ? 'active' : ''}
            onClick={() => {
              setMenu(item.label);
              setIsMobileMenuOpen(false);
            }}
          >
            <AnchorLink className="anchorlink" offset={50} href={item.href}>
              <p>{item.label}</p>
            </AnchorLink>
            <div className="underline" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
