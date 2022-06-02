const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        name: String,
        item: String,
    }
)

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;