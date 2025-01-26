import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchorlink" href="#home">
            <p onClick={() => setMenu('home')}>home</p>
          </AnchorLink>
          {menu === 'home' ? <div className="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchorlink" offset={50} href="#about">
            <p onClick={() => setMenu('about me')}>about me</p>
          </AnchorLink>
          {menu === 'about me' ? <div className="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchorlink" offset={50} href="#services">
            <p onClick={() => setMenu('services')}>services</p>
          </AnchorLink>
          {menu === 'services' ? <div className="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchorlink" offset={50} href="#portfolio">
            <p onClick={() => setMenu('portfolio')}>portfolio</p>
          </AnchorLink>
          {menu === 'portfolio' ? <div className="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchorlink" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>contact</p>
          </AnchorLink>
          {menu === 'contact' ? <div className="underline" /> : null}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
