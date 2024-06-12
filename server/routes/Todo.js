const {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/Todo");
const router = require("express").Router();

router.post("/create/todo", createTodo);
router.get("/get/todos", getAllTodos);
router.get("/get/todo/:id", getTodo);
router.put("/update/todo/:id", updateTodo);
router.delete("/delete/todo/:id", deleteTodo);

module.exports = router;