const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "4kb" }));

let todos = [
    "Cricket", "Dance", "Sing", "Coding"
]

app.get('/', (req, res, next) => {
    res.json({
        message: "Welcome to todos app"
    })
});

app.get('/todos', (req, res, next) => {
    res.json({
        todos: todos,
        message: "Todo Fetched Successfully"
    })
})

app.post('/todos', (req, res, next) => {
    const { task } = req.body;
    todos.push(task);
    res.json({
        todos: todos,
        message: "Todo Added Successfully"
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});