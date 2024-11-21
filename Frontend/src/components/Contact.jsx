import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted
  const [isLoading, setIsLoading] = useState(false); // Track if form is being submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state

    // Clear form fields immediately after clicking submit
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
      console.log("Form submitted successfully:", res.data);

      // Set form submission success and display the success message
      setIsSubmitted(true);

      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false); // Reset so the form reappears if needed
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  return (
    <div className="flex min-h-lvh flex-col">
      <div className="max-w-screen-lg mx-auto p-4 w-full md:w-1/2 lg:w-2/3 xl:w-1/4 flex-grow">
        {/* Display success message if form is submitted */}
        {isSubmitted && (
          <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-md">
            <p>Your message has been successfully submitted. Thank you!</p>
          </div>
        )}

        {/* Display the form if not submitted yet */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

            {/* Display loading message when form is being submitted */}
            {isLoading && (
              <div className="text-center text-blue-500 mb-4">Submitting...</div>
            )}

            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Request a Book / Query"
                className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
