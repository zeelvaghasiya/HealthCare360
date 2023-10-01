import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2/4 -translate-x-2/4 flex space-x-4">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white py-2 px-4 rounded-full shadow hover:bg-gray-600 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white py-2 px-4 rounded-full shadow hover:bg-gray-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
