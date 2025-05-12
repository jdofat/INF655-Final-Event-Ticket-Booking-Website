/*
Display detailed event information:
1. description
2. location map (optional Google Maps iframe)
3. date/time
4. price per ticket
5. Include "Add to Cart" button.
*/

import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../data";

const EventDetailsPage = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <p>Error</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{event.title}</h2>
      <p>Description: {event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Price per ticket: ${event.price}</p>

      <div style={{ margin: "20px 0" }}>
        <iframe
          title="map"
          width="100%"
          height="250"
          style={{ border: 0 }}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            event.location
          )}&output=embed`}
        ></iframe>
      </div>

      <button onClick={() => alert("Added")}>Add to Cart</button>
    </div>
  );
};

export default EventDetailsPage;
