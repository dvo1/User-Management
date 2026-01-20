// User model/schema
const mongoose = require('mongoose');

const UserDbSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
     password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],  
      default: 'user'   
    },
   
}, { timestamps: true })

module.exports = mongoose.model('User', UserDbSchema);

