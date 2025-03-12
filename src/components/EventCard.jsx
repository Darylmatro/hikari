import React from "react";

function EventCard({ event }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <h2 className="font-bold text-xl mb-2">{event.title}</h2>
      <p className="text-gray-700">Date: {event.date}</p>
      <p className="text-gray-700">Lieu: {event.location}</p>
      <p className="text-gray-700 mt-2">{event.description}</p>
      <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Réserver un billet
      </button>
    </div>
  );
}

export default EventCard;
