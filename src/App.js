import logo from "./logo.svg";
import "./App.css";
// import footer from './components/footer'
import Header from "./components/header";
import { Todos } from "./components/todos";
import { Footer } from "./components/footer";
import { Add_todo } from "./components/add_todo";
import React, { useState, useEffect } from "react";

function App() {
  //checking for null
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am delete of a todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    //deleting todos ->
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title) => {
    console.log("Add title", title);
    let no;
    if (todos.length == 0) {
      no = 1;
    } else {
      no = todos[todos.length - 1].no + 1; //add todos number
    }
    const myTodo = {
      no: no,
      title: title,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    //if undefined change to json format todos ->

    // if (localStorage.getItem("todos")) {
  };
  const [todos, setTodos] = useState(initTodos);

  //using this to update correctly after reloading ->
  // put this after useState ->
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // {
  //   no: 1,
  //   title: "Complete reactjs",
  // },
  // {
  //   no: 2,
  //   title: "Practise CP",
  // },
  // {
  //   no: 3,
  //   title: "Practise leetcode",
  // },
  // {
  //   no: 4,
  //   title: "Study dp",
  // },
  // {
  //   no: 5,
  //   title: "Fix bugs in project / practise number theory problems",
  // },

  return (
    <>
      <Header title="hey" />
      <Add_todo addTodo={addTodo}></Add_todo>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer></Footer>
    </>
  );
}

export default App;
