
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




    // const handleDelete = (id) => {
    //     console.log(id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/bookings/${id}`, {
    //                 method: "DELETE"
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Removed from Cart!',
    //                             'Your book has been Removed.',
    //                             'success'
    //                         )
    //                         const remaining = bookings.filter(booking => booking._id != id);
    //                         setBookings(remaining);
    //                     }
    //                 })
    //         }

    //     })
    // }





    const handleDelete = (id, bookedDate) => {
        console.log(id, bookedDate);

         
    // Convert bookedDate string to a Date object
    const dateFromString = new Date(bookedDate);

    // Calculate the difference in milliseconds between the current date and the booked date
    const timeDifference = dateFromString.getTime() - new Date().getTime();

    // Calculate the difference in days
    const daysDifference = timeDifference / (1000 * 3600 * 24);


    
        if (daysDifference >= 1) {
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
                                    'Your booking has been canceled.',
                                    'success'
                                );
                                const remaining = bookings.filter(booking => booking._id !== id);
                                setBookings(remaining);
                            }
                        })
                }
            });
        } else {
            Swal.fire(
                'Cannot Cancel Booking',
                'You can only cancel a booking until 1 day before the booked date.',
                'error'
            );
        }
    }
    






    const handleBookingUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
         method: 'PATCH',
         body: JSON.stringify({
         status: 'update',
           }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
         })
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'update'
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
           }
        });
    }



    return (
        <div className="mb-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>MyBooking | Ezystay</title>
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



