import React, { useEffect, useRef, useState } from 'react';
import p1 from './photos/p1.jpg';
import p2 from './photos/p2.jpg';
import p3 from './photos/p3.jpg';
import p4 from './photos/p4.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const [val, setVal] = useState(0);
  const valRef = useRef(val);

  const images = [p1, p2, p3, p4];
  const texts = [
    "Learn Anytime, Anywhere with your preferences.",
    "Learn all demanding skills with us.",
    "Learn with the best industry Experts.",
    "Impress your friends with your skills."
  ];

  useEffect(() => {
    valRef.current = val; // keep ref updated
  }, [val]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="slideshow" className="w-full py-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
        <img
          src={images[val]}
          alt="Slide"
          className="w-full md:w-[50%] max-w-[600px] border border-black h-60 md:h-[300px] object-cover rounded-lg shadow-md"
        />
        <div className="w-full md:w-[40%] bg-[#E7E8D1] dark:bg-myblack dark:text-white font-bold text-center p-4 rounded-lg shadow-md text-[1rem] md:text-[1.25rem]">
          {texts[val]}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6 px-4">
        <button
          onClick={() => setVal((prev) => (prev - 1 + images.length) % images.length)}
          className="w-24 py-2 font-bold border-2 border-black bg-[#E7E8D1] dark:bg-myblack dark:text-white hover:bg-[#A7BEAE] dark:hover:bg-black rounded-md"
        >
          Prev
        </button>
        <button
          onClick={() => setVal((prev) => (prev + 1) % images.length)}
          className="w-24 py-2 font-bold border-2 border-black bg-[#E7E8D1] dark:bg-myblack dark:text-white hover:bg-[#A7BEAE] dark:hover:bg-black rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide;
