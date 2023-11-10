import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-[90vh] mx-auto pb-10 mb-10">
            <Carousel className="rounded">
                <div className="relative h-full w-full">
                    <img
                        src={'https://i.ibb.co/gRt0N1s/banner-11-1.png'}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-2xl md:text-4xl lg:text-5xl"
                            >
                                Your Perfect Accommodation
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80 lg:text-lg text-base font-medium"
                            >
                                EzyStay offers comfortable accommodation with a wide variety of rooms, additionals services, and
                                &apos; and amenities available to all our guests. we offer the highest level of
                                hospitality and great customer service.
                            </Typography>
                            <div className="flex justify-center">
                                <Link to='/rooms'>
                                    <Button size="lg" className="bg-[#C2A973] text-black" >
                                        Explore
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={'https://i.ibb.co/T2nWWs7/banner-11-2.png'}
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-2xl md:text-4xl lg:text-5xl"
                            >
                                Experience the highest level of coziness
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80 lg:text-lg text-base font-medium"
                            >
                                Our hotel has a wide variety of gently furnished and fully equipped rooms for every guest.
                                Whether&apos; you are traveling on business or with family, we have what you need to enjoy your stay.
                            </Typography>
                            <div className="flex justify-center">
                                <Link to={'/rooms'}>
                                    <Button size="lg" className="bg-[#C2A973] text-black">
                                        Explore
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={'https://i.ibb.co/FW2v9KQ/banner-11-3.png'}
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-2xl md:text-4xl lg:text-5xl"
                            >
                                Diverse Facilities
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80 lg:text-lg text-base font-medium"
                            >
                                At our hotels, you can always feel comfortable in your room, having
                                the right surrounding to relax and&apos;reload as it is utmost important.
                                We offer a wide variety
                                of hotels facilities including what you require.
                            </Typography>
                            <div className="flex justify-center ">
                                <Link to='/rooms'>
                                    <Button size="lg" className="bg-[#C2A973] text-black" >
                                        Explore
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;