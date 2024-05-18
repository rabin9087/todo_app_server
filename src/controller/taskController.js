import { addTask, getATask, getAllTasks, updateTask } from "../schema/taskModel.js";

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
        } 0

    } catch (error) {
        next(error)
    }

}

export const fetchAllTasks = async (req, res, next) => {
    try {
        const { email } = req.params
        const result = await getAllTasks({ email });

        result?.length ?
            res.json({
                status: 'success',
                message: 'All available tasks',
                tasks: result
            }) :
            res.json({
                status: 'error',
                message: 'Unable to get all the tasks'
            })
    } catch (error) {
        error(next)
    }
}

export const fetchATask = async (req, res, next) => {
    try {
        const { _id } = req.params
        const result = await getATask({ _id });

        result?._id ?
            res.json({
                status: 'success',
                message: 'All available tasks',
                tasks: result
            }) :
            res.json({
                status: 'error',
                message: 'Unable to get all the tasks'
            })
    } catch (error) {
        error(next)
    }
}

export const updateATasks = async (req, res, next) => {
    try {
        const { _id } = req.params
        const result = await updateTask(_id, req.body);

        result?.length ?
            res.json({
                status: 'success',
                message: 'All available tasks',
                tasks: result
            }) :
            res.json({
                status: 'error',
                message: 'Unable to get all the tasks'
            })
    } catch (error) {
        error(next)
    }
}