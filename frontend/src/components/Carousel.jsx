import React, { useState, useEffect } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";



const images = [
  "https://images.pexels.com/photos/928000/pexels-photo-928000.jpeg",
  "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg",
  "https://images.pexels.com/photos/16170/pexels-photo.jpg",
  "https://images.pexels.com/photos/7202906/pexels-photo-7202906.jpeg",
  "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
  "https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg",
  "https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg",
  "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
  "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg",
  "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="pt-[70px] lg:h-[calc(100vh-10px)] md:h-[calc(100vh-50px)] w-full relative overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="image"
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-[55%] left-4 transform -translate-y-1/2 p-3 bg-gray-600 bg-opacity-50 text-black rounded-full hover:bg-opacity-70 transition cursor-pointer"
      >
        {<GrPrevious />}
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-[55%] right-4 transform -translate-y-1/2 p-3 bg-gray-600  bg-opacity-50 text-black rounded-full hover:bg-opacity-70 transition cursor-pointer"
      >
        {<GrNext />}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
