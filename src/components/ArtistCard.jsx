import React from "react";

function ArtistCard({ artist }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <img
        className="w-full h-48 object-cover"
        src={artist.image}
        alt={artist.name}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{artist.name}</h2>
        <p className="text-gray-700 text-base">{artist.bio}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
