import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Footer.css';
import logo from '../images/footer.png';

const Footer = () => (
  <footer>
    <img src={logo} alt="Little Lemon footer logo" />
    <div className="footer-content">
      <div>
        <p className="footer-heading">Doormat Navigation</p>
        <Link to="/" className="footer-item">Home</Link>
        <Link to="/wip" className="footer-item">About</Link>
        <Link to="/wip" className="footer-item">Menu</Link>
        <Link to="/bookings" className="footer-item">Reservations</Link>
        <Link to="/wip" className="footer-item">Order Online</Link>
        <Link to="/wip" className="footer-item">Login</Link>
      </div>
      <div>
        <p className="footer-heading">Contact</p>
        <Link to="#" className="footer-item">Address</Link>
        <Link to="#" className="footer-item">Phone Number</Link>
        <Link to="#" className="footer-item">Email</Link>
      </div>
      <div>
        <p className="footer-heading">Social Media</p>
        <Link to="#" className="footer-item">Facebook</Link>
        <Link to="#" className="footer-item">Instagram</Link>
        <Link to="#" className="footer-item">TikTok</Link>
        <Link to="#" className="footer-item">Twitter</Link>
      </div>
    </div>
  </footer>
);

export default Footer;