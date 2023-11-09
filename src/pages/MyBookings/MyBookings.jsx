import { Helmet } from "react-helmet";

const MyBookings = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MyBooking - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-gray-100 pb-20">
                <h2 className="text-4xl  text-center py-10">My Bookings</h2>
                <div>
                    <div className="card card-side w-4/5 mx-auto bg-base-100 shadow-xl">
                        <figure><img className="" src={"https://i.ibb.co/gg0N3BL/room1.png"} /></figure>
                        <div className="flex justify-between items-center  w-full pr-4">
                            <div className="ml-5">
                                <h2 className="card-title pb-4">Name:  Deluxe Suite</h2>
                                <p className="pb-1">Price per Night: $140</p>
                                <p className="mb-3">Booking: 9 1 dec 2023</p>
                                <button className="btn text-white bg-blue-500">your review</button>
                            </div>
                            <div className="card-actions rounded items-center justify-end">
                                <div className="btn-group btn-group-vertical space-y-4">
                                    <button className="btn text-white bg-green-400">update date</button>
                                    <button className="btn text-white  bg-orange-500">cancel booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;