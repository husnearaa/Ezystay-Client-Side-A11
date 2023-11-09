import { useState } from "react";


const Rating = () => {

    const [rating, setRating] = useState(0);

    const handleRatingClick = (newRating) => {
        setRating(newRating);
    }         


    return (
        <div>
            <div>
                <div className="flex">

                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleRatingClick(index + 1)}
                                style={{
                                    cursor: 'pointer',
                                    color: index < rating ? 'gold' : 'gray',
                                }}
                            >
                                ★
                            </span>
                        ))}
                </div>
                
            </div>
        </div>
    );
};

export default Rating;




