const express = require('express');
const mongoose = require('mongoose');
const Students = require('./models/studentsModel');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

mongoose.connect('mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority');
const db = mongoose.connection;

db.once('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error(err);
    process.exit(-1);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    console.log(req.body.students);
    Students.create(req.body.students, (err, student) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});