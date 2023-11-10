

const AddReview = () => {
    return (
        <div>
              <div>
            <div className="mt-10 mb-10">
                <div className="bg-gray-100 p-24 mx-auto lg:w-4/5 md:w-4/5 w-2/1">
                    <h2 className="text-4xl font-bold text-center text-black pb-5">Insights and feedback</h2>
                    <p className="text-center text-black font-medium lg:text-lg text-base mb-10">
                    Share your detailed experiences
                    and feedback to help us <br />   enhance your future hotel booking experiences on our website.
                    </p>
                    <form className="">
                        {/* form  row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                            <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Your Name</span>
                                </label>
                                <label className="">
                                    <input type="text" name="name" placeholder="Your Name" required className="input input-bordered rounded-sm  w-full" />
                                </label>
                            <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Your Email</span>
                                </label>
                                <label className="">
                                    <input type="text" name="email" placeholder="Your Email" required className="input input-bordered  rounded-sm  w-full" />
                                </label>
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Rating</span>
                                </label>
                                <label className="">
                                    <input type="text" name="rating" placeholder="rating" required className="input input-bordered rounded-sm  w-full" />
                                </label>
                                <label className="label">
                                    <span className="label-text font-semibold text-base text-black">Your Review</span>
                                </label>
                                <textarea name="review" id="" required cols="30" rows="6"></textarea>
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