import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const todoModel = mongoose.models.todo || mongoose.model("todo", TodoSchema);
export default todoModel;
