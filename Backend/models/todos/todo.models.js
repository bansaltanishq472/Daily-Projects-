import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subTodo",
        }
    ], // Array of SubTodos
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema);