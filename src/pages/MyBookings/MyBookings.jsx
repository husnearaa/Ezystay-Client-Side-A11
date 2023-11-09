
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {AuthContext} from '../../providers/AuthProvider';
import MyBookingCard from "./MyBookingCard";


const MyBookings = () => {

  const {user} = useContext(AuthContext);
    const [bookings, setBookings] =useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setBookings(data))
  }, [url])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MyBooking - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {/* <h2>booking: {bookings.length}</h2> */}
            <h2 className="text-5xl  text-center py-10">My Bookings</h2>

           {
            bookings.map(booking => <MyBookingCard
            key={booking._id}
            booking={booking}
            ></MyBookingCard>)
           }

        </div>
    );
};

export default MyBookings;