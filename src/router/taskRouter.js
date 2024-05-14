import express from 'express'
import { fetchAllTasks, postTask } from '../controller/taskController.js'

const router = express.Router()

router.post("/", postTask)
router.get("/", fetchAllTasks)

export default router