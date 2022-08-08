import React from "react";

import './App.css';

import Navbar from "./components/Navbar";
import CardGallery from './components/CardGallery';

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <CardGallery />
    </div>
  );
}