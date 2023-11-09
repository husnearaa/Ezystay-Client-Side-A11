import { Rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";


const RoomDetails = () => {

    const detailsData = useLoaderData()
    console.log(detailsData);

    const { title, image, size, price_per_night, special_offer, available_seats, rating, description } = detailsData;


    // const addHandleBook = event => {

    //     event.preventDefault();

    //     const form = event.target;
    //     const date = form.date.value;



    //     fetch("https://beauty-world-server.vercel.app/bookNow", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(detailsData),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {

    //             Swal.fire("Successfully Added!", "Successfully added to the cart", "success");

    //         })
    //         .catch(error => {
    //             return Swal.fire("Warning", "This item is already in your Cart", "warning");
    //         })
    //         ;

    // }

    return (
        <div>
            <h2 className="pb-10 mb-15 md:text-3xl text-2xl font-semibold text-center">
            {title}
            </h2>
            <div>
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
                                <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
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
                                Rating:<Rating value={parseInt(rating)} />
                                <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    Description: {description}
                                </p>
                                <form >
                                Date: <input type="date" name="date" className="input input-bordered mb-3" id="" />
                                <input type="submit" value="Book Now" className="block w-full select-none rounded-lg bg-[#C2A973] py-3.5 px-7
                                      text-center align-middle  text-sm font-bold  text-white" />
                            </form >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;