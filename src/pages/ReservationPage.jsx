// src/pages/ReservationPage.jsx
import React from "react";

const ReservationPage = () => {
  const artists = [
    {
      name: "Artiste 1",
      nextConcert: "12 avril 2024",
      location: "Salle XYZ, Paris",
    },
    {
      name: "Artiste 2",
      nextConcert: "20 mai 2024",
      location: "Zénith de Nantes",
    },
    {
      name: "Artiste 3",
      nextConcert: "5 juin 2024",
      location: "Stade de Rennes",
    },
  ];

  return (
    <div className="reservation-page">
      <h1 className="text-3xl font-bold text-center my-8">Réservation de Concert</h1>

      <div className="flex flex-col items-center">
        {artists.map((artist, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-80 mb-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold">{artist.name}</h2>
            <p className="text-lg text-gray-600 mt-2">
              Prochain concert: {artist.nextConcert}
            </p>
            <p className="text-lg text-gray-600 mt-1">Lieu: {artist.location}</p>

            <button className="mt-4 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition-colors duration-300">
              Réserver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationPage;
