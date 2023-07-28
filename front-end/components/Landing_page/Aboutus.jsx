import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Aboutus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Who We Are",
      text: "Shareholder Management System is a software company that provides shareholder management solutions for businesses of all sizes. Our platform simplifies the process of managing shareholders, enabling businesses to focus on their core operations.",
    },
    {
      id: 2,
      title: "Our Vision",
      text: "Our vision is to become the industry leader in shareholder management systems by providing a comprehensive, reliable, and user-friendly platform that meets the evolving needs of our clients.",
    },
    {
      id: 3,
      title: "Our Mission",
      text: "Our mission is to empower businesses to make informed decisions by providing them with a shareholder management system that is easy to use, accessible, and secure. We are committed to providing exceptional customer service and continually improving our platform to meet the evolving needs of our clients.",
    },
  ];

  const handleSlideChange = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (direction === "prev") {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <div id="aboutus">
      <Head>
        <title>About Us - Shareholder Management System</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <section className="pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
              <p className="text-lg lg:text-xl text-gray-600">
              Shareholder Management System is a leading provider of shareholder management solutions for public and private companies. Our platform helps companies manage their shareholder communications and engagement processes with ease and efficiency.
              </p>
            </div>
          </section>
          <section className="pb-16">
            <div className="relative h-80 sm:h-96 md:h-128 lg:h-144 bg-slate-300 rounded-lg shadow-lg overflow-hidden hover:scale-110 ease-in duration-300">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-full max-w-2xl px-4">
                  <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-center mb-4 bg-gray-200 rounded-full">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 text-center">
                    {slides[currentSlide].text}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 flex justify-center items-center p-4">
                <button
                  className="h-10 w-10 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                  onClick={() => handleSlideChange("prev")}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M13.707 15.707a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L8.414 9.293l5.293 5.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="h-10 w-10 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline mx-4"
                  onClick={() => handleSlideChange("next")}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.293 15.707a1 1 0 001.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 00-1.414 1.414L11.586 10 6.293 15.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default Aboutus;