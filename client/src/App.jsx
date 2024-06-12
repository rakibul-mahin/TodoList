import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Todo from "./screens/Todo";

function App() {
  return (
    <div className="flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
