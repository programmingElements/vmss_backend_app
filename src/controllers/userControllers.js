import User from "../models/User.js";

async function handleUserSignup (req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({message: "All Fields Required!"});
    }
    const user = await User.create({
        username,
        email,
        password
    });
    return res.status(200).json({message: "User Created Successfully!", data: user});
}

export { handleUserSignup };