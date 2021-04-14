/* eslint-disable prettier/prettier */
import Group from "../models/group";

const groupObject = (req) => {
    return new Group({
        ...req.body
    });
}
const getAllGroups = (creator) => {
    return Group.find({ creator }).populate([{ path:'creator members', select: 'firstName lastName'}, { path: 'site', select: 'name'}]);
}
const saveGroup = (group) => {
    return group.save().then(t => t.populate([{ path:'creator members', select: 'firstName lastName'}, { path: 'site', select: 'name'}]).execPopulate());
}

const getGroup = (_id) => {
    return Group.findOne({ _id }).populate([{ path:'creator', select: 'firstName lastName'}, { path: 'site', select: 'name'}]);
}

const updateGroup = (id, group) => {
    return Group.updateOne(
        { _id: id },
        {
            $set: group
        }
    );
}
const deleteGroup = (_id) => {
    return Group.findOneAndDelete({ _id });
}
const userService = {
    saveGroup,
    getGroup,
    updateGroup,
    groupObject,
    getAllGroups,
    deleteGroup
}
export default userService;