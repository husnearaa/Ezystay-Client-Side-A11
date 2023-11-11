
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from '../../providers/AuthProvider';
import MyBookingCard from "./MyBookingCard";
import Swal from "sweetalert2";


const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])




    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed from Cart!',
                                'Your book has been Removed.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id != id);
                            setBookings(remaining);
                        }
                    })
            }

        })
    }



    const handleBookingUpdate = id => {
        fetch(`https://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'update' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'update'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }



    return (
        <div className="mb-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>MyBooking - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {/* <h2>booking: {bookings.length}</h2> */}
            <h2 className="lg:text-5xl text-3xl  text-center py-10 dark:text-white">My Bookings</h2>
            <div>

                {
                    bookings.map(booking => <MyBookingCard
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBookingUpdate={handleBookingUpdate}
                    ></MyBookingCard>)
                }
            </div>

        </div>
    );
};

export default MyBookings;