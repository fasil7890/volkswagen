import logo from '../../assets/logo.jpg';
import { ImMenu } from 'react-icons/im';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen, 'open');
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar">
          <div className="menu-sm">
            <div className="menu-icon-wrapper" onClick={toggleMenu}>
              <ImMenu className="menu-icon" />
            </div>
            {isMenuOpen ? (
              <div className="menu-list">
                <ul className="sm-list">
                  <li className="active">Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Booking</li>
                  <li>Contact</li>
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>

          <ul className="menu">
            <li className="active">Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Booking</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
