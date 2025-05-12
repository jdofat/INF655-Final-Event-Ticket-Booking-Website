/*
1. Display user information (name, email)
2. Display booking history pulled from Firebase
*/

import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ProfilePage = () => {
  const user = auth.currentUser;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
      if (!user) return;

      const fetchBookings = async () => {
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setBookings(data);
    };


    fetchBookings();
  }, [user]);

  if (!user) return <p>Log in</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>

      <h3>Booking History</h3>
      {bookings.length === 0 ? (
        <p>None</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {booking.items.map((item, i) => (
              <p key={i}>
                {item.title} — {item.quantity} × ${item.price}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default ProfilePage;
