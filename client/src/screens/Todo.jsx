import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { Link, useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";

const Todo = () => {
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();
  let todoId = location.pathname.split("/")[2];

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/get/todo/${todoId}`);
        const data = await res.json();
        setTodo(data);
        setTitle(data.title);
        setDescription(data.description);
        setIsComplete(data.isComplete);
      } catch (err) {
        console.log(err);
      }
    };
    getTodo();
  }, [todoId]);

  const updateTodo = async () => {
    try {
      const updatedTodo = {
        title: title || todo.title,
        description: description || todo.description,
        isComplete: isComplete !== undefined ? isComplete : todo.isComplete,
      };
      await axios.put(`http://localhost:8080/api/update/todo/${todoId}`, updatedTodo);
      toast.success('Todo updated successfully!');

    } catch (err) {
      console.log(err);
      toast.error('Failed to update todo.');
    }
  }

  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/todo/${todoId}`);
      toast.success('Todo deleted successfully!');
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error('Failed to delete todo.');
    }
  }

  return (
    <div>
      <label>Completed</label>
      <input
        type="checkbox"
        checked={isComplete}
        className="checkbox"
        name="isComplete"
        onChange={(e) => setIsComplete(e.target.checked)}
      />
      <label>Title</label>
      <input
        type="text"
        placeholder="Todo title"
        value={title}
        className="input input-bordered input-xs w-full max-w-xs"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        placeholder="Todo Description"
        value={description}
        className="input input-bordered input-xs w-full max-w-xs"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Link to={"/"}>
      <button className="btn btn-success">Go Back</button>
      </Link>
      <button className="btn btn-warning" onClick={updateTodo}>Save</button>
      <button className="btn btn-error" onClick={deleteTodo}>Delete</button>
      <ToastContainer />
    </div>
  );
};

export default Todo;
