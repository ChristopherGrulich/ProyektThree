import React from "react";
import data from "../data.js";
import NavBar from "./NavBar";
import Entry from "./Entry";
import Footer from "./Footer";

export default function App() {
  const entries = data.map((item) => {
    return (
      <div>
        <Entry key={item.id} {...item} />
      </div>
    );
  });

  return (
    <div id="container">
      <NavBar />
      <div>{entries}</div>
      <Footer />
    </div>
  );
}
