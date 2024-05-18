import TaskSchema from "./taskSchema.js"

export const addTask = (tasks) => {
    return TaskSchema(tasks).save()
}

export const getAllTasks = (filter) => {
    return TaskSchema.find(filter)
}

export const getATask = (filter) => {
    return TaskSchema.findOne(filter)
}

export const updateTask = (id, filter) => {
    return TaskSchema.findByIdAndUpdate(id, filter, { new: true })
}

export const deleteTask = (id) => {
    return TaskSchema.findByIdAndDelete({ id })
}