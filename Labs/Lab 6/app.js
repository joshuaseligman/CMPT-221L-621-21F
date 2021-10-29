const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/form2', (req, res) => {
    res.render('form2');
});

app.post('/form1', (req, res) => {
    console.log(req.body.form1);
    res.redirect('/form2');
});

app.post('/form2', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log('Server listening on port 3000');
});