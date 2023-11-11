
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Review = ({rating}) => {
    return (
        <div className="mt-10 pb-10 pt-10">
            <h4 className="text-3xl text-center font-semibold dark:text-white">Review: </h4>
            <div className="container flex flex-col w-full max-w-lg p-6  border-3 border-black mx-auto divide-y shadow-xl mb-10 rounded-md dark:bg-blue-gray-700">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://source.unsplash.com/100x100/?portrait"
                                className="object-cover w-12 h-12 rounded-full " />
                        </div>
                        <div>
                            <h4 className="font-bold dark:text-white">Leroy Jenkins</h4>
                            <span className="text-xs text-black dark:text-white">2 days ago</span>
                        </div>
                    </div>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="p-4 space-y-2 text-sm text-black">
                    <p className="dark:text-white">Exceptional experience with Ezystay! Effortless booking, outstanding choices, and a delightful stay. Highly recommended!</p>

                </div>
            </div>
        </div>
    );
};

export default Review;





