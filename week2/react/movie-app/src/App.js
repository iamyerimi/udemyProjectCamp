import Movies from "pages/Movies";
import Test from "pages/Test";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Movies />} /> */}
        <Route path="/" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
