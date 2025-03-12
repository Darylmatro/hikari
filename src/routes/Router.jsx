// src/Router.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Artists from "../pages/Artists";
import Events from "../pages/Events";
import ReservationPage from "../pages/ReservationPage";  // Importation de la page de réservation

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reservation" element={<ReservationPage />} />  {/* Nouvelle route pour la page de réservation */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
