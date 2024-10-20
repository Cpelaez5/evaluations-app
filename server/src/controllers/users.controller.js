import User from '../models/User';

export const getUsers = (req, res) => {
    const user = await User.find();
    res.json(users)
}

export const getUserById = (req, res) => {

}

export const updateUsersById = (req, res) => {

}

export const deleteUsersById = (req, res) => {

}
