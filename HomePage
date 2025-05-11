/*
Objective:
Build a full frontend Event Ticket Booking Website using ReactJS,
with user authentication and data persistence using Firebase.

The app must allow users to:
1. sign up
2. log in
3. browse events
4. view event details
5. add tickets to a cart
6. simulate a booking7. view their booking history through the Profile page

HomePage:
1. List all event cards dynamically (title, date, location, price, thumbnail)
2. Fetch from static data.js
*/


npx create-react-app ticket-booking
cd ticket-booking
npm install

import React from "react";
import { events } from "../data";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Upcoming Events</h1>
      <ul style={styles.list}>
        {events.map((event) => (
          <li key={event.id} style={styles.item}>
            <strong>{event.title}</strong><br />
            Date: {event.date}<br />
            Location: {event.location}<br />
            Price: ${event.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial"
  },
  list: {
    listStyleType: "none",
    padding: 0
  },
  item: {
    marginBottom: "20px",
    padding: "10px",
    borderBottom: "1px solid #ddd"
  }
};

export default HomePage;



