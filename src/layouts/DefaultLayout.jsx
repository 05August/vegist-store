import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// import "./styles.css";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className="containerBody">{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
