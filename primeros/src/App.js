import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; 
import Informacion from "./components/Informacion";
import { StackFrontend } from "./components/StackFrontend";
import { StackBackend } from "./components/StackBackend";


class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />          
        </div>
        <section>
          <Modal />
          <Informacion />
          <StackFrontend />
          <StackBackend />
        </section>
      </div>      
    );
  } 
}

export default App;
