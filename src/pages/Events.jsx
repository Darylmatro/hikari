import React from "react";
import EventCard from "../components/EventCard";

const events = [
  {
    id: 1,
    title: "Événement A",
    date: "2023-12-25",
    location: "Paris",
    description: "Description de l'événement A",
  },
  {
    id: 2,
    title: "Événement B",
    date: "2024-01-15",
    location: "Lyon",
    description: "Description de l'événement B",
  },
];

function Events() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Events;
