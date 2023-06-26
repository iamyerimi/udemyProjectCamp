import Footer from "components/Footer";
import Navigation from "components/Navigation";
import About from "pages/About";
import Home from "pages/Home";
import Profile from "pages/Profile";
import SearchResults from "pages/SearchResults";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/profiles/:username" element={<Profile/>} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </Router>
    // <div className="App">
    //   <Navigation />
    //   <Footer />
    // </div>
  );
}

export default App;
