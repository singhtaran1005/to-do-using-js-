import React, { useState } from "react";

export const Add_todo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be blanked");
    } else {
      addTodo(title);
      //  title=" ";
      setTitle(" ");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a TODO </h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Todo Title{" "}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        {/* <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Title
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div> */}
        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" class="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
