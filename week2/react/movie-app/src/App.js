import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieHome from "./pages/MovieHome";
import Chat from "./pages/Chat";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MovieHome />} />
          <Route path="/chatting" element={<Chat />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
