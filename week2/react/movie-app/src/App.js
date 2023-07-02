// import Movies from "pages/Movies";
// import Test from "pages/MovieHome";
import Chat from "pages/Chat";
import MovieHome from "./pages/MovieHome"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Movies />} /> */}

        <Route path="/chatting" element={<Chat />} />
        <Route path="/" element={<MovieHome />}  />
      </Routes>
    </Router>
  );
}

export default App;
