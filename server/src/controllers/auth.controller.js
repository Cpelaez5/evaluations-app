import User from "../models/User";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    res.status(201).json()
}
export const login = async (req, res) => {
    res.json('signin')
}