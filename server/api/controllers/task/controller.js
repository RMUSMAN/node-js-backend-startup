import TaskService from '../../services/task.service';
import { decodeToken } from '../../../helpers';
export class Controller {
  async createTask(req, res) {
    try {
      const data = decodeToken(req);
      req.body.creator = data.id;
      const taskObject = TaskService.taskObject(req);
      const task = await TaskService.saveTask(taskObject);
      res
        .status(201)
        .json({ message: 'Task created successfully', data: task });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getTasks(req, res) {
    try {
      const data = decodeToken(req);
      const tasks = await TaskService.getAllTasks(data.id);
      res.status(201).json({ data: tasks });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
  async getTask(req, res) {
    try {
      const task = await TaskService.getTask(req.params.id);
      res.status(201).json({ data: task });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async updateTask(req, res) {
    try {
      const task = await TaskService.updateTask(req.params.id, req.body);
      return res.status(201).json({ data: task });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
export default new Controller();
