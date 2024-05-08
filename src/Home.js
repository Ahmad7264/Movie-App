import React from "react";
import SearchForm from "./SearchForm";
import Movies from "./Movies";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <SearchForm />
      <Movies />
      <Footer />
    </main>
  );
};

export default Home;
