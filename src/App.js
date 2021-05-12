import React from 'react'

import logo from './logo.svg';
import './App.css';
// import footer from './components/footer'
import Header from "./components/header";
import { Todos } from "./components/todos";
import { Footer } from "./components/footer";

function App() {

  let todos = [
    {
      no: 1,
      title: "Complete reactjs"
    },
    {
      no: 2,
      title: "Practise cp"
    }, {
      no: 3,
      title: "Practise leetcode"
    }, {
      no: 4,
      title: "Study dp"
    }, {
      no: 5,
      title: "Fix bugs in project / practise number theory problems"
    },
  ]
  return (
    <>
      <Header title="hey" />
      <Todos todos={todos} />
      <Footer></Footer>
    </>
  );
}

export default App;
