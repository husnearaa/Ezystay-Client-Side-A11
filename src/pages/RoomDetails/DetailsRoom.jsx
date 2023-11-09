import { useLoaderData } from "react-router-dom";
import Review from "./Review";
import Rating from "../../components/Rating/Rating";
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider'


const DetailsRoom = () => {

    const data = useLoaderData();
    console.log(data);
    const { _id, title, image, size, price_per_night, special_offer, available_seats, rating, description } = data;
    console.log(price_per_night);

    const { user } = useContext(AuthContext);

    const handleBookRoom = event => {
        event.preventDefault();

        const form = event.target;
        const date = form.date.value;

        const booking = {
            image,
            title,
            price_per_night,
            date,
            rating,
            _id,
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }


    return (
        <div>
            <div>
                <div>
                    <h2 className=" mt-10 md:text-4xl text-2xl font-semibold text-center">
                        {title}
                    </h2>
                    <div className="flex justify-center items-center h-screen">
                        <div>
                            <div className="flex w-full  md:flex-row flex-col bg-white bg-clip-border shadow-md">
                                <div className="m-0 w-2/4 shrink-0 overflow-hidden rounded-r-none bg-white bg-clip-border ">
                                    <img
                                        src={image}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="mb-2 block font-sans text-2xl font-semibold leading-relaxed text-gray-700 antialiased">
                                        {title}
                                    </p>
                                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        Size: {size}
                                    </p>
                                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        Price per Night: {price_per_night}
                                    </p>
                                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        Special Offer: {special_offer}
                                    </p>
                                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        Available Seat: {available_seats}
                                    </p>
                                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        <p>
                                            Rating: {rating} <Rating></Rating>
                                        </p>
                                    </p>
                                    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        Description: {description}
                                    </p>
                                    <form onSubmit={handleBookRoom} >
                                        Date: <input type="date" name="date" className="input input-bordered mb-3" id="" />
                                        <input type="submit" value="Book Now" className="block w-full select-none rounded-lg bg-[#C2A973] py-3.5 px-7
                                      text-center align-middle  text-sm font-bold  text-white" />
                                    </form >
                                </div>
                            </div>
                        </div>
                    </div>
                    <Review></Review>
                </div>
            </div>
        </div>
    );
};

export default DetailsRoom;