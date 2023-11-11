import { Link } from "react-router-dom";


const MyBookingCard = ({booking, handleDelete, handleBookingUpdate,}) => {

    const { _id, title, image, size, bookingRoom, price_per_night, status, date} = booking;

   




    return (
        <div>
             <div className="bg-gray-100 pt-10 dark:bg-blue-gray-700">
                <div>
                    <div className="card card-side w-4/5 mx-auto bg-base-100 shadow-xl dark:bg-blue-gray-700">
                        <figure><img className="" src={image} /></figure>
                        <div className="flex justify-between items-center  w-full pr-4">
                            <div className="ml-5">
                                <h2 className="card-title pb-4 lg:text-xl text-base dark:text-white">{title}</h2>
                                <p className="pb-1 dark:text-white">Price Per Night: ${price_per_night}</p>
                                <p className="pb-1 dark:text-white">Date: {date}</p>
                                {/* <p className="mb-3 dark:text-white">{bookingRoom}</p> */}
                                <Link to={`/reviews/${_id}`}>
                                <button className="btn text-white bg-blue-500 ">your review</button>
                                </Link>
                            </div>
                            <div className="card-actions rounded items-center justify-end">
                                <div className="btn-group btn-group-vertical space-y-4">
                                    <button onClick={() => handleBookingUpdate(_id)} className="btn text-white bg-green-400">update date</button>
                                    <button onClick={() => handleDelete(_id, date)} className="btn text-white  bg-orange-500">cancel booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingCard;