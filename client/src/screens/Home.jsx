import { useEffect, useState } from "react";
import axios from "axios";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/get/todos");
        setTodos(res.data);
      } catch (err) {
        console.log(1, err);
      }
    };
    getTodos();
  }, []);
  return (
    <div className="flex flex-col justify-between items-center">
      <AddTodo />
      <div>
        {todos.map((todo) => (
          <Todos
            key={todo._id}
            title={todo.title}
            description={todo.description}
            isComplete={todo.isComplete}
            id={todo._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
