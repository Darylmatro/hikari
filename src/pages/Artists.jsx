import React from "react";

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: "Etienne Daho",
      genre: "Pop Rock",
      image: "/images/daho.jpg",
      description:
        "Icône de la pop française, originaire de Rennes et figure emblématique de la scène rock rennaise",
      popularSongs: [
        "Week-end à Rome",
        "Le Grand Sommeil",
        "Tombé pour la France",
      ],
      upcomingShows: ["Festival Trans Musicales 2024", "Concert au Liberté"],
    },
    {
      id: 2,
      name: "Nolwenn Korbell",
      genre: "Musique bretonne contemporaine",
      image: "/images/korbel.jpg",
      description:
        "Auteure-compositrice-interprète rennaise, mêlant tradition bretonne et modernité",
      popularSongs: ["An Distro", "Breizh da Viken", "Red an Noz"],
      upcomingShows: ["Festival de Cornouaille", "Les Tombées de la Nuit"],
    },
    {
      id: 3,
      name: "Mermonte",
      genre: "Post-Rock",
      image: "/images/mermonte.jpg",
      description:
        "Groupe instrumental rennais créant des paysages sonores uniques",
      popularSongs: ["Audiorama", "Mondrian", "Particles"],
      upcomingShows: ["Festival Art Rock", "Concert à l'Ubu"],
    },
    {
      id: 4,
      name: "Juveniles",
      genre: "Électro Pop",
      image: "/images/artist4.jpg",
      description:
        "Duo électro-pop rennais reconnu pour ses performances énergiques",
      popularSongs: ["We Are Young", "Through The Night", "Fantasy"],
      upcomingShows: ["Les Trans Musicales", "Concert au Antipode"],
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
          Artistes de Rennes
        </span>
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row"
          >
            <div className="relative overflow-hidden w-full md:w-1/3">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {artist.name}
                </h2>
                <p className="text-indigo-600 font-medium text-lg mb-4">
                  {artist.genre}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {artist.description}
                </p>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Chansons Populaires
                  </h3>
                  <ul className="space-y-1">
                    {artist.popularSongs.map((song, index) => (
                      <li key={index} className="text-gray-600">
                        • {song}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Prochains Spectacles
                  </h3>
                  <ul className="space-y-1">
                    {artist.upcomingShows.map((show, index) => (
                      <li key={index} className="text-gray-600">
                        • {show}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button 
                onClick={() => alert(`Réservation pour ${artist.name} effectuée !`)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
              >
                Réserver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
