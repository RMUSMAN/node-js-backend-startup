/* eslint-disable prettier/prettier */
import Task from "../models/task";

const taskObject = (req) => {
    return new Task({
        ...req.body
    });
}
const getAllTasks = (creator) => {
    return Task.find({ creator }).populate([{ path:'assignee', select: 'firstName lastName'}, { path: 'site', select: 'name'}]);
}
const saveTask = (task) => {
    return task.save().then(t => t.populate([{ path:'assignee', select: 'firstName lastName'}, { path: 'site', select: 'name'}]).execPopulate());
}

const getTask = (_id) => {
    return Task.findOne({ _id }).populate([{ path:'assignee', select: 'firstName lastName'}, { path: 'site', select: 'name'}]);
}

const updateTask = (id, task) => {
    return Task.updateOne(
        { _id: id },
        {
            $set: task
        }
    );
}
const deleteTask = (_id) => {
    return Task.findOneAndDelete({ _id });
}
const userService = {
    saveTask,
    getTask,
    updateTask,
    taskObject,
    getAllTasks,
    deleteTask
}
export default userService;