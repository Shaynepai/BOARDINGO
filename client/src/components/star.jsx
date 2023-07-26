import  { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label
            key={index}
            className={`text-xl ${
              rating >= starValue ? 'text-yellow-500' : 'text-gray-300'
            }`}
          >
            <input
              type="radio"
              name="rating"
              value={starValue}
              className="hidden"
              onChange={() => handleRatingChange(starValue)}
            />
            ★
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;