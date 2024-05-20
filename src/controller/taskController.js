import { addTask, deleteTask, getATask, getAllTasks, updateTask } from "../schema/taskModel.js";

export const postTask = async (req, res, next) => {
    try {
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
        next(error)
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
        next(error)
    }
}

export const updateATasks = async (req, res, next) => {
    try {
        const { _id } = req.params
        console.log(_id, req.body)
        const result = await updateTask({ _id }, req.body);
        console.log(result)
        result ?
            res.json({
                status: 'success',
                message: 'Task has been Updated',
                tasks: result
            }) :
            res.json({
                status: 'error',
                message: 'Unable to update the task, Please try again later'
            })
    } catch (error) {
        next(error)
    }
}

export const deleteATask = async (req, res, next) => {
    try {
        const { _id } = req.params
        console.log(_id)
        const result = await deleteTask(_id);
        console.log(result)
        result ?
            res.json({
                status: 'success',
                message: 'Task has been deleted successfully',
                tasks: result
            }) :
            res.json({
                status: 'error',
                message: 'Unable to delete the task, Please try again later'
            })
    } catch (error) {
        next(error)
    }
}