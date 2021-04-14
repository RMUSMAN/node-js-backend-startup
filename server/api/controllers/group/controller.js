import GroupService from '../../services/group.service';
import { decodeToken } from '../../../helpers';
export class Controller {
  async createGroup(req, res) {
    try {
      const data = decodeToken(req);
      req.body.creator = data.id;
      const groupObject = GroupService.groupObject(req);
      const group = await GroupService.saveGroup(groupObject);
      res
        .status(201)
        .json({ message: 'Group created successfully', data: group });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getGroups(req, res) {
    try {
      const data = decodeToken(req);
      const groups = await GroupService.getAllGroups(data.id);
      res.status(201).json({ data: groups });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
  async getGroup(req, res) {
    try {
      const group = await GroupService.getGroup(req.params.id);
      res.status(201).json({ data: group });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async updateGroup(req, res) {
    try {
      const group = await GroupService.updateGroup(req.params.id, req.body);
      return res.status(201).json({ data: group });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
export default new Controller();
