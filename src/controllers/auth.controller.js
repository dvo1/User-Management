
const authService = require('../services/auth.service')

const register = async (req, res) => {
    try {
        const {email, password, name} = req.body;
        const result = await authService.register(email, password, name);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    
}


const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const result = await authService.login(email, password)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
module.exports = {register, login}

