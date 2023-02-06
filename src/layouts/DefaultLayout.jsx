import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

// import "./styles.css";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="containerBody"><Outlet /></main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
