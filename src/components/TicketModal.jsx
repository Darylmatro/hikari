import React from "react";

function TicketModal({ event, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded p-6 w-96">
        <h3 className="text-xl font-bold mb-4">Réserver pour {event.title}</h3>
        <input
          type="number"
          min="1"
          className="w-full p-2 mb-4 border rounded"
          placeholder="Quantité de billets"
        />
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full">
          Confirmer
        </button>
        <button onClick={onClose} className="mt-2 text-red-500">
          Annuler
        </button>
      </div>
    </div>
  );
}

export default TicketModal;
