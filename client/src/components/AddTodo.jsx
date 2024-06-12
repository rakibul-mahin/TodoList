import { React, useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const postTodo = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/create/todo", {
        title,
        description,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <div className="flex flex-col justify-center items-center mb-5">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Todo Title"
          className="input input-bordered input-xs w-full max-w-xs"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-5">
        <label>Description:</label>
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered input-xs w-full max-w-xs"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="btn btn-secondary" onClick={postTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
