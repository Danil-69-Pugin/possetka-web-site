import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import AppointmentForm from "../Components/AppointmentForm";
import Optoviki from "../Components/optoviki";


function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <Product />
      <AppointmentForm />
      <About />
      <BookAppointment />
      <Optoviki />
      <Footer />
    </div>
  );
}

export default Home;
