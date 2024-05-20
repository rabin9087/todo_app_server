import express from 'express';
import 'dotenv/config'
import { connectMongoose } from './src/configure/dbconfigure.js';
import taskRouter from './src/router/taskRouter.js';
import morgan from 'morgan';
import cors from 'cors'
// import { addTask, deleteManyTask, getAllTasks, switchTask } from './src/schema/TaskModel.js';


const app = express();
const PORT = 8000;

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

connectMongoose()

app.use("/api/v1/task", taskRouter)


app.use((error, req, res, next) => {
    const errorCode = error.errorCode || 500

    res.status(errorCode).json({
        status: "error",
        code: errorCode,
        message: error.message
    })
})

app.use("/", (req, res) => {
    return res.status(200).json("Server is connected")
})

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`server is running at http://localhost:${PORT}`)
})