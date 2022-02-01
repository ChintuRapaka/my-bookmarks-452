const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { application } = require('express');

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.set('views', __dirname+'/views');
app.use(bodyParser.urlencoded({extended: true}));

const links = [];

app.post('/', (req, res) => {
    links.push({
        title: req.body.title,
        link: req.body.link
    })
    res.redirect('/');
})

app.get('/', (req, res) => {
    res.render('index', {links: links});
})

app.listen(5000, () => {
    console.log("Server is up and running @ http://localhost:5000");
})