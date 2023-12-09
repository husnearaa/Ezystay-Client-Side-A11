import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";



const AddReview = () => {

    const { user } = useContext(AuthContext);


    const handleAddReview = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const feedback = form.feedback.value;

        const addedReview = { name, email, rating, feedback }

        console.log(addedReview);


        fetch('https://ezystay-server-side.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }



    return (
        <div>
            <div>
                <div className="mt-10 mb-10">
                    <div className="bg-gray-100 p-24 mx-auto lg:w-4/5 md:w-4/5 w-2/1 dark:bg-blue-gray-700">
                        <h2 className="text-4xl font-bold text-center text-black pb-5 dark:text-white">Insights and feedback</h2>
                        <p className="text-center text-black font-medium lg:text-lg text-base mb-10 dark:text-white">
                            Share your detailed experiences
                            and feedback to help us <br />   enhance your future hotel booking experiences on our website.
                        </p>
                        <form onSubmit={handleAddReview} className="">
                            {/* form  row */}
                            <div className="mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base text-black dark:text-white">Your Name</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="name" placeholder="Your Name" required className="input input-bordered rounded-sm  w-full dark:bg-gray-100" />
                                    </label>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base text-black dark:text-white">Your Email</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="email" placeholder="Your Email" required className="input input-bordered  rounded-sm  w-full dark:bg-gray-100 " />
                                    </label>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base text-black dark:text-white">Rating</span>
                                    </label>
                                    <label className="">
                                        <input type="text" name="rating" placeholder="rating" required className="input input-bordered rounded-sm  w-full dark:bg-gray-100" />
                                    </label>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base text-black dark:text-white">Your Review</span>
                                    </label>
                                    <textarea name="feedback" id="" required cols="30" rows="6" className="dark:bg-gray-100"></textarea>
                                </div>
                            </div>
                            <input type="submit" value="Submit" className="btn  text-black bg-[#C2A973]  rounded-sm  w-full " />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;