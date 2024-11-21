import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards2";

function Freebook() {
  // Statically define the books with images for JavaScript, React, and Node.js
  const [book, setBook] = useState([
    {
      id: 1,
      name: "JavaScript Basics",
      category: "Free",
      image:"https://img.freepik.com/free-vector/open-book-with-abstract-shapes_1368-371.jpg?t=st=1730980399~exp=1730983999~hmac=6ad65a0633ca498a96ba25fdb203ad0a9dd4cf5e0327c571ad24d36a6491da8f&w=740",
      link:"https://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Absolute-Beginners.pdf"
    },
    {
      id: 2,
      name: "React for Beginners",
      category: "Free",
      image:"https://img.freepik.com/free-vector/open-book-with-abstract-shapes_1368-371.jpg?t=st=1730980399~exp=1730983999~hmac=6ad65a0633ca498a96ba25fdb203ad0a9dd4cf5e0327c571ad24d36a6491da8f&w=740",
      link:"https://dl.ebooksworld.ir/books/Beginning.ReactJS.Foundations.Chris.Minnick.Wiley.9781119685548.EBooksWorld.ir.pdf"
    },
    {
      id: 3,
      name: "Node.js Essentials",
      category: "Free",
      image:"https://img.freepik.com/free-vector/open-book-with-abstract-shapes_1368-371.jpg?t=st=1730980399~exp=1730983999~hmac=6ad65a0633ca498a96ba25fdb203ad0a9dd4cf5e0327c571ad24d36a6491da8f&w=740",
      link:"https://github.com/AdnanBabakan/NodeJS-Essentials-E-Book/blob/master/NodeJS%20Essentials.pdf"
    },
  ]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
        <br/><br/>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-white">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          Take advantage of our collection of free books and resources designed to help you get started on your programming and software development journey. These materials cover fundamental concepts and practical examples, perfect for beginners looking to build a strong foundation in coding. Whether you're learning a new language or exploring key development concepts, these free resources will support your growth without any cost. Start learning today—on us!
          </p>
        </div>

        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
