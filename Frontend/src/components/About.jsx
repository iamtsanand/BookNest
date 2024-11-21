// About.js
import React from "react";

function About() {
  return (
    <div className="max-w-screen-md mx-auto mt-16 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6 text-black ">About Us</h2>
      <p className="text-lg text-black leading-relaxed mb-6 text-justify">
      Welcome to BookNest, your go-to destination for the best resources to kickstart your coding journey! Whether you're a beginner or an experienced developer looking to sharpen your skills, our bookstore offers a diverse collection of books that cater to all levels of learning. We understand that learning programming can be overwhelming, and our goal is to make this process easier and more enjoyable by providing carefully curated resources to guide you every step of the way.
      </p>
      <p className="text-lg text-black leading-relaxed mb-6 text-justify">
      We believe in the power of knowledge, and that's why we offer a blend of free and premium books. Our free resources are perfect for those starting out on their coding adventure, providing a solid foundation in various programming languages and concepts. These free books cover essential topics, from basic syntax to practical projects, to ensure you build a strong base.
      </p>
      <p className="text-lg  text-black leading-relaxed mb-6 text-justify">
      As you progress in your learning, we understand that there's always more to explore. That's why we also offer premium, expert-selected books on advanced topics such as algorithms, software design patterns, data structures, web development, machine learning, and much more. These paid books are designed to push you to the next level and help you become an expert coder, mastering the skills required to tackle complex real-world projects and job challenges.
      </p>
      <p className="text-lg  text-black leading-relaxed mb-6 text-justify">
      We are more than just a bookstore—we are a community of learners, developers, and experts united by the love of coding. Our goal is to provide affordable and high-quality resources that help you excel in your coding journey, no matter where you start.
      </p>
      <p className="text-lg  text-whiteleading-relaxed mb-6 text-justify">
      So whether you're looking to learn the basics, expand your skills, or master advanced techniques, Bookstore is here to support you in every step of your coding adventure. We aim to make learning accessible, engaging, and fun, empowering you to take on new challenges and reach your goals.
      </p>
      <p className="text-lg  text-blackfont-extrabold leading-relaxed mb-6 text-justify">
      Join us today, and let's code the future together!
      </p>

      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-500 text-black px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default About;
