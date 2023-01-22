import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; 
import Programas from "./components/Programas";

function App() {
  return (
    <div className="App">        
      <div class="header">
        <Header />
      </div>
      <section>        
        <Modal />
        <Programas />
        
      </section>
      <Footer />
    </div>
  );
}

export default App;
