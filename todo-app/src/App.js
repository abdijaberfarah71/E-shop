import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navabr from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Home from "./components/HomePage";
import ShopingDetails from "./components/ShopingDetails";
import React, { useState } from "react";

function App() {
  const shoping = [
    { id: 1, product: "Product 1" },
    { id: 2, product: "Product 2" },
    { id: 3, product: "Product 3" },
  ];
  const [data, setData] = useState(shoping);
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route
          path="shopinDetails/:id"
          element={<ShopingDetails data={data} />}
        />
        <Route path="/" exact element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/content" element={<Content data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
