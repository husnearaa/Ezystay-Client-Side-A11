import { Link } from "react-router-dom";


const MyBookingCard = ({ booking, handleDelete, handleBookingUpdate, }) => {

    const { _id, title, image, size, bookingRoom, price_per_night, status, date } = booking;






    return (
        <div>
            <div className="bg-gray-100 dark:bg-blue-gray-700 py-8">
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
                                    {/* <button onClick={() => handleBookingUpdate(_id)} className="btn text-white bg-green-400">update date</button> */}
                                    <button className="btn text-white bg-green-400" onClick={() => document.getElementById('my_modal_1').showModal()}>Update date</button>
                                    <button onClick={() => handleDelete(_id, date)} className="btn text-white  bg-orange-500">cancel booking</button>
                                </div>
                            </div>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Select new date to book room by your preference</p>
                                    <form onSubmit={(event) => {
                                        event.preventDefault()
                                        handleBookingUpdate(_id,event)
                                    }} >
                                        <input type="date" className="border mr-5" name="newdate" id="" /> 
                                        <button type="submit" className="btn bg-green-600">Submit</button>
                                    </form>
                                    <div className="modal-action">
                                         <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn bg-blue-gray-200">Close</button>
                                        </form> 
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingCard;