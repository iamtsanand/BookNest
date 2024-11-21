// Layout.js
import React from 'react';
import Navbar from './Navbar';  // Ensure correct path
import Footer from './Footer';  // Ensure correct path

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />  {/* Navbar will be displayed on all pages */}
      <main>{children}</main>  {/* Page-specific content */}
      <Footer />  {/* Footer will be displayed on all pages */}
    </div>
  );
};

export default Layout;
