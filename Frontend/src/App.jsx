// App.js
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";  
import About from "./components/About";  // Import the About component
import Layout from "./components/Layout";  // Import the Layout component
import Navbar from "./components/Navbar";
import Login from "./components/Login";


function App() {
  const [authUser] = useAuth();  // Ensure you're checking auth state properly
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* Navigation links */}
      {/* <nav className="p-4 bg-gray-800 text-white">
        <a href="/" className="mr-4">Home</a>
        <a href="/course" className="mr-4">Courses</a>
        <a href="/contact" className="mr-4">Contact</a>
        <a href="/about" className="mr-4">About</a>  {/* Add About Link */}
      {/* </nav> } */}
    <Navbar></Navbar>
      {/* Routes wrapped in Layout */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses/> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} /> 
        <Route path="/about" element={<Layout><About /></Layout>} /> 
        <Route path="/login" element={<Layout><Login /></Layout>}/>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
