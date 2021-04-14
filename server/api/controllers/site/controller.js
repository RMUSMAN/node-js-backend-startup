import SiteService from '../../services/site.service';
import { decodeToken } from '../../../helpers';
export class Controller {
  async createSite(req, res) {
    try {
      const data = decodeToken(req);
      req.body.creator = data.id;
      const siteObject = SiteService.siteObject(req);
      const site = await SiteService.saveSite(siteObject);
      res
        .status(201)
        .json({ message: 'Site created successfully', data: site });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getSites(req, res) {
    try {
      const data = decodeToken(req);
      const sites = await SiteService.getAllSites(data.id);
      res.status(201).json({ data: sites });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
  async getSite(req, res) {
    try {
      const site = await SiteService.getSite(req.params.id);
      res.status(201).json({ data: site });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async updateSite(req, res) {
    try {
      const site = await SiteService.updateSite(req.params.id, req.body);
      return res.status(201).json({ data: site });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
export default new Controller();

