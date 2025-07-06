import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E7E8D1] dark:bg-myblack px-4 py-12">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1e1e1e] text-black dark:text-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">About Us</h1>

        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Welcome to our website! We are dedicated to providing high-quality, free courses to help you learn and grow.
          Our mission is to make education accessible to everyone, regardless of their background or financial situation.
        </p>

        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Our courses cover a wide range of topics — from technology and programming to personal development.
          We believe in the power of knowledge and aim to build a community where learners thrive and achieve their goals.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Thank you for visiting Courses.net. We hope you find our content valuable and inspiring.
          If you have any questions or feedback, feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default About;
