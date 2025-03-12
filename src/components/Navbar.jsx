import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">
          Accueil
        </Link>
        <Link to="/artists" className="text-white font-bold">
          Artistes
        </Link>
        <Link to="/events" className="text-white font-bold">
          Événements
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
