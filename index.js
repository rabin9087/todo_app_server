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

// app.get('/api/tasks', async (req, res) => {
//     const getTasks = await getAllTasks();
//     res.json({
//         status: 'success',
//         message: 'All tasks are available',
//         getTasks
//     })
// })

// app.post('/api/task', async (req, res) => {
//     const task = req.body

//     const result = await addTask(task);

//     result?._id ?
//     res.json({
//         status: 'success',
//         message: 'Task has been added'
//     }):
//     res.json({
//         status: 'Failed',
//         message: 'Unable to add the task'
//     })
// })

// app.patch('/api/task', async(req, res) => {
//     const {_id, type} = req.body; 
//     const result = await switchTask(_id, {type});
//     result?._id ?
//     res.json({
//         status: 'success',
//         message: 'Task has been updated successfully'
//     }):
//     res.json({
//         status: 'success',
//         message: "Unable to update the task this time, please try again"
//     })
// })

// app.delete('/api/tasks', async(req, res) => {
//     const {ids} = req.body;
//     const result = await deleteManyTask(ids);

//     result?.deletedCount ?
//     res.json({
//         status: 'success',
//         message: 'Tasks has been deleted successfully'
//     }): 
//     res.json({
//         status: 'success',
//         message: 'Unable to delete tasks, please try again'
//     })
// })


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`server is running at http://localhost:${PORT}`)
})