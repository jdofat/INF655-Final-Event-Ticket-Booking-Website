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
  const [quantity, setQuantity] = useState(1);

  if (!event) return <p>Error</p>;

  const addToCart = () => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = existing.findIndex((item) => item.id === event.id);

    if (existingIndex !== -1) {
      existing[existingIndex].quantity += quantity;
    } else {
      existing.push({
        id: event.id,
        title: event.title,
        price: event.price,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existing));
    alert("Added to cart");
  };
  
  
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

 <label>
        Quantity:{" "}
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          style={{ width: "60px" }}
        />
 </label>
          
      <button onClick={() => alert("Added")}>Add to Cart</button>
    </div>
  );
};

export default EventDetailsPage;
