import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; 

function App() {
  return (
    <div className="App">        
      <div class="header">
        <Header />
      </div>
      <section>        
        <Modal />
      </section>
      <Footer />
    </div>
  );
}

export default App;
