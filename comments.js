// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Data
let comments = [
    { id: 1, author: 'Bobby', text: 'Hello world!' },
    { id: 2, author: 'John', text: 'Wow!' }
];

// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).send();
});

app.delete('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    comments = comments.filter(comment => comment.id !== id);
    res.status(200).send();
});

// Start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});