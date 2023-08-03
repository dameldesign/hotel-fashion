import React, { lazy } from "react";
import "./App.css";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Treading = lazy(() => import("./Treading/Treading"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Meet = lazy(() => import("./components/Meet"));
const Space = lazy(() => import("./components/Space"));



const App = () => {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Treading />
      <Meet />
      <Space />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
