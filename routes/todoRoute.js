const router = require("express").Router()
const { getAllTask, addTask, deleteTask, updateTask } = require("../controller/todoController")


router
    .get("/", getAllTask)
    .post("/create-todo", addTask)
    .delete("/delete-todo/:todoId", deleteTask)
    .put("/update-todo/:todoId", updateTask)



module.exports = router