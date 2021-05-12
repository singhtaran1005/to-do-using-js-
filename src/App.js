
import logo from './logo.svg';
import './App.css';
// import footer from './components/footer'
import Header from "./components/header";
import { Todos } from "./components/todos";
import { Footer } from "./components/footer";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
    console.log("I am delete of a todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    //deleting todos ->
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };
  const [todos, setTodos] = useState([
    {
      no: 1,
      title: "Complete reactjs"
    },
    {
      no: 2,
      title: "Practise CP"
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
  ]);
  return (
    <>
      <Header title="hey" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer></Footer>
    </>
  );
}

export default App;
