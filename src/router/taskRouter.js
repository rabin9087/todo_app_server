import express from 'express'
import { fetchATask, fetchAllTasks, postTask, updateATasks } from '../controller/taskController.js'

const router = express.Router()

router.post("/", postTask)
router.get("/:email", fetchAllTasks)
router.get("/edit/:_id", fetchATask)
router.patch("/:_id", updateATasks)
router.delete("/:_id", fetchAllTasks)

export default router