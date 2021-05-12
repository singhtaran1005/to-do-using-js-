import React from 'react'

import logo from './logo.svg';
import './App.css';
// import footer from './components/footer'
import Header from "./components/header";
import { Todos } from "./components/todos";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Footer></Footer>
    </>
  );
}

export default App;
