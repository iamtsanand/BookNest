import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  // Load book data from a JSON file (list.json)
  useEffect(() => {
    const getBook = async () => {
      try {
        // Ensure the correct URL path for local JSON files
        const res = await axios.get("/list.json");
        //console.log(res.data); // Log the response to the console
        setBook(res.data);
      } catch (error) {
        console.log(error); // Handle any errors
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white text-black pt-24">
        {/* Top padding to prevent content from being hidden behind the navbar */}
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-6">
            Browse through our handpicked selection of premium books and resources to level up your programming and software development skills. These carefully chosen materials cover a variety of topics, from clean code practices to mastering advanced algorithms, helping you gain in-depth knowledge and expertise. Whether you're starting out or looking to expand your knowledge, these books will guide you on your journey to becoming a proficient coder. Start your learning adventure today!
          </p>
          <Link to="/">
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Home
            </button>
          </Link>
        </div>

        {/* Render books dynamically */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
