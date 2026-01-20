
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const register = async (email, password, name) => {
    const existingUser = await User.findOne({email})
    if (existingUser) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        email,
        password: hashedPassword,
        name
    });
    const token =jwt.sign({userId: user._id}, process.env.JWT_SECRET)
    return {
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role
        }
    }
};

const login = async (email, password) => {
    const existingUser = await User.findOne({email});
    if (!existingUser) {
        throw new Error ('Invalid credentials')
    }
    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordMatch) {
        throw new Error ('Invalid credentials')
    }
     const token =jwt.sign({userId: existingUser._id}, process.env.JWT_SECRET)
    return {
        token,
        user: {
            id: existingUser._id,
            email: existingUser.email,
            name: existingUser.name,
            role: existingUser.role
        }
    }
};

module.exports = { register, login };