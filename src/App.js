import React from "react";
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/contact";
import Navbar from "./components/navbar";
import Success from "./pages/success";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route
            path="contact"
            element={
              <div>
                <Navbar />
                <Contact />
              </div>
            }
          />
          <Route path="success" element={<Success />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
