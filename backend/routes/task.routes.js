import express from 'express'
import CreateTask from '../controllers/CreateTask.js'
import GetTask from '../controllers/GetTask.js'

const taskRouter = express.Router()

taskRouter.post("/add_task",CreateTask)
taskRouter.get("/get_task",GetTask)

export default taskRouter