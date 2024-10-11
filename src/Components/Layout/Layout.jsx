import React from "react";
import Navbar from "../Navbar/Navbar";
import Router from "../../Routes/Router";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
