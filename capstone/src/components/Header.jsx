import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import logo from '../images/Logo.svg';

export default function Header() {
  const [isActive, setActive] = useState("home");

  return (
    <header className='header'>
      <Link to="/">
        <img src={logo} alt="Little Lemon" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={`nav-item ${isActive === "home" ? 'nav-item-active' : ''}`}
              onClick={() => setActive("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/wip"
              className={`nav-item ${isActive === "about" ? 'nav-item-active' : ''}`}
              onClick={() => setActive("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/wip"
              className={`nav-item ${isActive === "menu" ? 'nav-item-active' : ''}`}
              onClick={() => setActive("menu")}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/bookings"
              className={`nav-item ${isActive === "booking" ? 'nav-item-active' : ''}`}
              onClick={() => setActive("booking")}
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/wip"
              className={`nav-item ${isActive === "online" ? 'nav-item-active' : ''}`}
              onClick={() => setActive("online")}
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link
              to="/wip"
              className={`nav-item ${isActive === "login" ? 'nav-item-active' : ''}`}
              onClick={() => setActive("login")}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}