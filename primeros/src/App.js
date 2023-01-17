import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">        
      <div class="header">
        <Header />
      </div>
      <section>
        <Componente msg="Hola soy compon" />
        <Footer />
      </section>

    </div>
  );
}

export default App;
