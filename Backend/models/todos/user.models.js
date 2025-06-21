import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        require: true,
        tyep: String,
        unique: true,
    }
}, {timestamps : true});

export const User = mongoose.model("User", userSchema);