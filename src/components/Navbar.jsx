// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/artists" className="text-blue-500 hover:text-blue-700">
            Artistes
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-blue-500 hover:text-blue-700">
            Événements
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="text-blue-500 hover:text-blue-700">
            Réservation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
