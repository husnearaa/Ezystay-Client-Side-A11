import {Rating} from "@material-tailwind/react";

const Testimonial = () => {
    return (
        <div>
            <div className="bg-gray-100 mb-10">
                <h2 className="text-5xl font-bold py-10 text-center mt-15"> What Client <span className="text-[#C2A973]">Say</span></h2>
                <div className="flex justify-around items-center ">
                    <div>
                        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mb-10 mt-20">
                            <div className="mb-6 p-0">
                                <p className="block text-lg leading-relaxed text-inherit antialiased">
                                    I enjoyed my stay at this hotel. The room was spacious and well-appointed.
                                    The only thing that could have been better was the breakfast options.
                                    Overall, a great experience, and I'd recommend it to others.
                                </p>
                            </div>
                            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                                <img
                                    src={"https://i.ibb.co/LSvBwMt/pic-2.png"}
                                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                                />
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <h5 className="block text-xl font-semibold">
                                            Amilia Watson
                                        </h5>
                                        <Rating value={4} readonly />;
                                    </div>
                                    <p className="block text-base">
                                        Business Manager, Amazon
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mb-10 mt-20">
                            <div className="mb-6 p-0">
                                <p className="block  text-lg  leading-relaxed text-inherit antialiased">
                                    I had an amazing stay at this hotel. The staff was incredibly friendly and accommodating.
                                    The room was clean and comfortable, and the view from my balcony was breathtaking.
                                    I'll definitely be coming back on my next trip!
                                </p>
                            </div>
                            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                                <img
                                    src={"https://i.ibb.co/QYdMX5j/t2.png"}
                                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                                />
                                <div className="flex w-full flex-col gap-0.5">
                                    <div className="flex items-center justify-between">
                                        <h5 className="block text-xl font-semibold">
                                            Linda Carolyn
                                        </h5>
                                        <Rating value={5} readonly />;
                                    </div>
                                    <p className="block text-base">
                                        Software Engineer, Google
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;