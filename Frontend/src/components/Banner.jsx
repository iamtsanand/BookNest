import React from "react";
import banner from "../../public/newbanner.png";
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();

  const handleClick = () => {
    const email = document.getElementById('email').value;
   
    if (email.trim()) {
      navigate(`/signup?email=${encodeURIComponent(email)}`);
    } else {
      alert('Please enter an email.');
    }
  };

  return (
    <>
      <div className="bg-white text-black max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-yellow-800">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Welcome to our Bookstore! Start your coding adventure with a wide selection of free books, perfect for beginners. Once you're ready to take the next step, our premium collection offers in-depth resources to master coding and software development. Log in now to explore the full range of books that will help you become a pro coder!
            </p>
            <label className="input input-bordered flex items-center gap-2 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input id="email" type="text" className="grow text-black " placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary text-black bg-yellow-500 hover:bg-yellow-600" onClick={handleClick}>Get Started</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="books"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
