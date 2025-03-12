import React from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Les Trans Musicales 2024",
      date: "4-8 Décembre 2024",
      image: "/images/transmusic.jpg",
      description:
        "Le festival pionnier des musiques actuelles à Rennes, reconnu internationalement pour ses découvertes artistiques",
      location: "Parc Expo Rennes Aéroport & Centre-ville de Rennes",
      schedule: [
        "4 Décembre: Soirée d'ouverture aux Champs Libres",
        "5-7 Décembre: Concerts au Parc Expo et dans toute la ville",
        "8 Décembre: Grande parade de clôture dans le centre-ville",
      ],
      ticketPrice: "À partir de 38€/jour - Pass festival 98€",
      artists: [
        "Artistes émergents internationaux",
        "Scène locale rennaise",
        "Têtes d'affiche surprises",
      ],
    },
    {
      id: 2,
      title: "Festival Interceltique de Lorient",
      date: "9-18 Août 2024",
      image: "/images/inter.jpg",
      description:
        "Le plus grand festival de musique celtique au monde, célébrant la culture bretonne et celtique",
      location: "Centre-ville de Lorient, Bretagne",
      schedule: [
        "Tous les jours: Villages celtiques et animations",
        "Après-midis: Concours de cornemuses et spectacles traditionnels",
        "Soirées: Grands concerts et fest-noz",
        "Nuits: Concerts dans les bars partenaires",
      ],
      ticketPrice: "À partir de 25€/jour - Pass festival 180€",
      highlights: [
        "Grande Parade des Nations Celtes",
        "Nuits Interceltiques au Stade du Moustoir",
        "Championnat National des Bagadoù",
        "Master Class de musique traditionnelle",
      ],
    },
    {
      id: 3,
      title: "Les Vieilles Charrues",
      date: "11-14 Juillet 2024",
      image: "/images/vieille.jpg",
      description:
        "Le plus grand festival de musique en France, au cœur de la Bretagne",
      location: "Site de Kerampuilh, Carhaix, Bretagne",
      schedule: [
        "11 Juillet: Ouverture avec artistes internationaux",
        "12 Juillet: Scène rock et électro",
        "13 Juillet: Pop et variété française",
        "14 Juillet: Grande clôture et feu d'artifice",
      ],
      ticketPrice: "À partir de 49€/jour - Pass 4 jours 169€",
      artists: [
        "Têtes d'affiche internationales",
        "Artistes français",
        "Scène bretonne",
      ],
    },
    {
      id: 4,
      title: "Les Tombées de la Nuit",
      date: "3-7 Juillet 2024",
      image: "/images/tombe.jpg",
      description:
        "Festival des arts de la rue et spectacles insolites dans la ville de Rennes",
      location: "Différents lieux dans Rennes",
      schedule: [
        "Spectacles en continu dans toute la ville",
        "Performances artistiques surprises",
        "Installations urbaines interactives",
        "Nocturnes artistiques",
      ],
      ticketPrice: "Gratuit à 15€ selon les spectacles",
      highlights: [
        "Spectacles de rue innovants",
        "Parcours artistiques urbains",
        "Créations in situ",
        "Performances participatives",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12 transition-all duration-300">
        Festivals et Événements en Bretagne
      </h1>

      <div className="grid grid-cols-1 gap-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {event.title}
                </h2>
                <p className="text-indigo-600 font-medium text-lg mb-2">
                  {event.date}
                </p>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Lieu
                  </h3>
                  <p className="text-gray-600">{event.location}</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Programme
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {event.schedule.map((item, index) => (
                      <li key={index} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {event.artists && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Artistes
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {event.artists.map((artist, index) => (
                        <li key={index} className="mb-1">
                          {artist}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.highlights && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Points forts
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="mb-1">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6">
                  <p className="text-lg font-semibold text-indigo-600">
                    {event.ticketPrice}
                  </p>
                  <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
