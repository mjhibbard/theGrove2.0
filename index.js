const express       = require("express");
const path          = require("path");
const PORT          = process.env.PORT || 3000;


express()
    //App Config
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //Routes
    .get('/', (req, res) => res.render('index'))
    .get('/about', (req, res) => res.render('about'))
    .get('/call', (req, res) => res.render('call'))
    .get('/coffee', (req, res) => res.render('coffee'))
    .get('/contact', (req, res) => res.render('contact'))
    .get('/story', (req, res) => res.render("story"))
    .get('/showcase', (req, res) => res.render('showcase'))
    .get('/splash', (req, res) => res.render('splash'))
    .get('/media', (req, res) => res.redirect('/about'))
    .listen(PORT, (req, res) => console.log("The Grove server is Listening!!"))

//indygrove.church is site and through godaddy.com
//nodemon index.js

//local tunnel
//lt --port 3000

//ssh -l username domain -p (port)