import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero"

const Layout = ({ title, children }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - now always visible */}
      <Hero title={title} />

      {/* Page Content */}
      {children}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
