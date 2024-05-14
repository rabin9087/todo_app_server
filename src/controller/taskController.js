import { addTask, getATask, getAllTasks } from "../schema/taskModel.js";

export const postTask = async (req, res, next) => {
    try {
        console.log(req.body)
        const { task } = req.body
        const resp = await getATask({ task })
        if (resp?._id) {
            res.json({
                status: 'Failed',
                message: 'Task already exist'
            })
        } else {
            const result = await addTask(req.body);

            result?._id ?
                res.json({
                    status: 'success',
                    message: 'Task has been added',
                    result
                }) :
                res.json({
                    status: 'Failed',
                    message: 'Unable to add the task'
                })
        }

    } catch (error) {
        next(error)
    }

}

export const fetchAllTasks = async (req, res, next) => {
    try {
        const result = await getAllTasks();

        result?.length ?
            res.json({
                status: 'success',
                message: 'All available tasks'
            }) :
            res.json({
                status: 'error',
                message: 'Unable to get all the tasks'
            })
    } catch (error) {
        error(next)
    }

}