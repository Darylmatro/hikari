import React from "react";

const Home = () => {
  const events = [
    {
      id: 1,
      title: "Les Trans Musicales 2024",
      date: "4-8 Décembre 2024",
      image: "/images/transmusic.jpg",
      description:
        "Le festival pionnier des musiques actuelles à Rennes, reconnu pour ses découvertes artistiques",
    },
    {
      id: 2,
      title: "Festival Interceltique",
      date: "9-18 Août 2024",
      image: "/images/inter.jpg",
      description:
        "Le plus grand festival de musique celtique au monde à Lorient",
    },
    {
      id: 3,
      title: "Les Vieilles Charrues",
      date: "11-14 Juillet 2024",
      image: "/images/vieille.jpg",
      description:
        "Le plus grand festival de musique en France, au cœur de la Bretagne à Carhaix",
    },
  ];

  const artists = [
    {
      id: 1,
      name: "Etienne Daho",
      genre: "Pop Rock",
      image: "/images/daho.jpg",
      description: "Icône de la pop française, originaire de Rennes",
    },
    {
      id: 2,
      name: "Nolwenn Korbell",
      genre: "Musique bretonne contemporaine",
      image: "/images/korbel.jpg",
      description:
        "Auteure-compositrice-interprète rennaise, mêlant tradition bretonne et modernité",
    },
    {
      id: 3,
      name: "Mermonte",
      genre: "Post-Rock",
      image: "/images/mermonte.jpg",
      description: "Groupe instrumental rennais aux paysages sonores uniques",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-8 sm:mb-16">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
          Welcome to Hikari
        </span>
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-8">
          Festivals à ne pas manquer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={360}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-2 text-sm sm:text-base">
                  {event.date}
                </p>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-8">
          Artistes Rennais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {artist.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-2 text-sm sm:text-base">
                  {artist.genre}
                </p>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                  {artist.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
