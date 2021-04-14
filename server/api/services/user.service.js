/* eslint-disable prettier/prettier */
import User from "../models/user";

const userObject = (req) => {
    return new User({
        ...req.body
    });
}

const registerUser = (user) => {
    return user.save();
}
const getUserByEmail = (email) => {
    return User.findOne({ email });
}
const getAllUsers = (creator) => {

    return User.find({ $and: [{ creator }, { deleted: false }] }).select("-password");
}
const getUserById = (_id) => {
    return User.findOne({ _id });
}
const updateUser = (id, user) => {
    return User.updateOne(
        { _id: id },
        {
            $set: user
        }
    );
}
const deleteUser = (_id) => {
    return User.findOneAndDelete({ _id });
}
const userService = {
    registerUser,
    getUserByEmail,
    getUserById,
    updateUser,
    userObject,
    getAllUsers,
    deleteUser
}
export default userService;