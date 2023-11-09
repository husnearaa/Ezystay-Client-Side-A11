

const MyBookingCard = ({booking, handleDelete, handleBookingUpdate}) => {

    const { _id, title, image, size, bookingRoom, price_per_night, status} = booking;

   




    return (
        <div>
             <div className="bg-gray-100 pt-10">
                <div>
                    <div className="card card-side w-4/5 mx-auto bg-base-100 shadow-xl">
                        <figure><img className="" src={image} /></figure>
                        <div className="flex justify-between items-center  w-full pr-4">
                            <div className="ml-5">
                                <h2 className="card-title pb-4">{title}</h2>
                                <p className="pb-1">Price Per Night: ${price_per_night}</p>
                                {/* <p className="mb-3">{bookingRoom}</p> */}
                                <button className="btn text-white bg-blue-500">your review</button>
                            </div>
                            <div className="card-actions rounded items-center justify-end">
                                <div className="btn-group btn-group-vertical space-y-4">
                                    <button onClick={() => handleBookingUpdate(_id)} className="btn text-white bg-green-400">update date</button>
                                    <button onClick={() => handleDelete(_id)} className="btn text-white  bg-orange-500">cancel booking</button>
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