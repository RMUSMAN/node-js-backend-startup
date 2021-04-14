/* eslint-disable prettier/prettier */
import Site from "../models/site";

const siteObject = (req) => {
    return new Site({
        ...req.body
    });
}
const getAllSites = (creator) => {
    return Site.find({ $and: [{ creator }, { deleted: false }]});
}
const saveSite = (site) => {
    return site.save();
}

const getSite = (_id) => {
    return Site.findOne({ _id });
}

const updateSite = (id, site) => {
    return Site.updateOne(
        { _id: id },
        {
            $set: site
        }
    );
}
const deleteSite = (_id) => {
    return Site.findOneAndDelete({ _id });
}
const userService = {
    saveSite,
    getSite,
    updateSite,
    siteObject,
    getAllSites,
    deleteSite
}
export default userService;