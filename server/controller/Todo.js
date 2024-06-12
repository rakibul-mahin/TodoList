const Todo = require('../models/Todo');

module.exports = {
    createTodo: async (req, res) => {
        const { title, description } = req.body;
        try {
            const newTodo = new Todo({
                title: title,
                description: description,
            });
            const savedTodo = await newTodo.save();
            res.json(savedTodo);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find();
            res.json(todos);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getTodo: async (req, res) => {
        const { id } = req.params;
        try {
            const todo = await Todo.findById(id);
            res.json(todo);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateTodo: async (req, res) => {
        const {id} = req.params;
        const {title, description, isComplete} = req.body;
        try{
            let todo = await Todo.findById(id);
            todo = await Todo.findByIdAndUpdate(id, {
                title: title || todo.title,
                description: description || todo.description,
                isComplete: isComplete || todo.isComplete,
            });
            let updatedTodo = await todo.save();
            updatedTodo = await Todo.findById(id);

            res.json(updatedTodo);
        }catch(err){
            res.status(500).json(err);
        }
    },
    deleteTodo: async (req, res) => {
        const {id} = req.params;
        try{
            await Todo.findByIdAndDelete(id);
            res.json("Todo Deleted Successfully");
        }catch(err){
            res.status(500).json(err);
        }
    }
}