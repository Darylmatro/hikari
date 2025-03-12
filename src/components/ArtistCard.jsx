import React from "react";

function ArtistCard({ artist }) {
  const handleReservation = () => {
    alert(`Réservation pour ${artist.name} effectuée !`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full h-40 object-cover"
        src={artist.image}
        alt={artist.name}
      />
      <div className="px-4 py-2">
        <h2 className="font-bold text-lg mb-1">{artist.name}</h2>
        <p className="text-gray-700 text-sm">{artist.bio}</p>
        <button 
          onClick={handleReservation} 
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          Réserver
        </button>
      </div>
    </div>
  );
}

export default ArtistCard;
