import React from "react";
import ArtistCard from "../components/ArtistCard";

const artists = [
  {
    id: 1,
    name: "Artiste A",
    bio: "Biographie de l'artiste A",
    image: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    name: "Artiste B",
    bio: "Biographie de l'artiste B",
    image: "https://example.com/image2.jpg",
  },
];

function Artists() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}

export default Artists;
