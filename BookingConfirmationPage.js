/*
Booking Confirmation Page:
1. After clicking "Checkout," redirect to a thank you page
2. Save the booking to Firebase
*/

import React, { useEffect } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const BookingConfirmationPage = () => {
  useEffect(() => {
    const saveBooking = async () => {
      const user = auth.currentUser;
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (!user || cart.length === 0) return;

      try {
        await addDoc(collection(db, "bookings"), {
          userId: user.uid,
          items: cart,
          createdAt: serverTimestamp()
        });
        localStorage.removeItem("cart");
      } catch (error) {
        console.error("Error", error);
      }
    };

    saveBooking();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thanks! Tickets confirmed.</h2>
    </div>
  );
};

export default BookingConfirmationPage;
