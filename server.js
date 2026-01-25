const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log('${req.method}${req.url}');
    next();
});

app.get('/', (req, res) => {
    res.send('My Week 2 API is running!');
});

app.post('/user', (req, res) => {
    const {name, emmail} = req.body;
    if (!name || !emmail) {
        return res.status(400).json({ error: 'Name and emmail are required' });
    }
    res.send('Hello, ${name}!');
});

app.get('/user/id', (req, res) => {
    const {id} = req.params;
    res.send('User ${id} profile');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);   
});