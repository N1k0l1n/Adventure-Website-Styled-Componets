import React from "react";
import "../App.css";
import Hero from "../components/hero/Hero";
import Cards from "../components/card/Cards";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;
