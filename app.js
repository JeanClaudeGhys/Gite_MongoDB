const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
mongoose.set('strictQuery', false)

//dossier public liens
app.use(express.static("public"));

app.get("/index.ejs", function(req, res) {
    res.render("index.ejs")
});

app.get("/legite.ejs", function(req, res) {
    res.render("legite.ejs")
});

app.get("/studios.ejs", function(req, res) {
    res.render("studios.ejs")
});

app.get("/roulotte.ejs", function(req, res) {
    res.render("roulotte.ejs")
});

app.get("/kota.ejs", function(req, res) {
    res.render("kota.ejs")
});

app.get("/contact.ejs", function(req, res) {
    res.render("contact.ejs")
});

//traitement du formulaire
mongoose.connect('mongodb://localhost:27017/Gite_Moulin',{useNewUrlParser:true});
app.use(express.urlencoded({extended: true})); //parser (récupération des contenus des champs du formulaire)

/*app.post("/", (req, res) => {
    res.send("Votre nom = > " + req.body.name + "<br>" + " Votre Email = > " + req.body.email + "<br>" +
    " Votre téléphone = > " + req.body.telephone + "<br>" + " Le sujet => " + req.body.subject + "<br>" +
    " Commentaire => " + req.body.message)
});*/

//-----------------------CREATION DE LA BASE DE DONNEE-----------------------------------
// A ne faire tourner qu'une fois--------------------------------------------------------
// Création de la structure de l'enregistrement Moogose
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    telephone:String,
    subject:String,
    message:String
});

const client_schema = mongoose.Schema (
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        telephone: {type: String, required: true},
        subject: {type: String, required: true},
        message: {type: String, required: true}
    }
);

const client = mongoose.model('client', client_schema);

/*
//test de donnée
const toto = new client ({
    name: "Ghyselinck",
    email: "kjhkh@bbox.fr",
    telephone: "03 27 21 56 89",
    subject: "Réservation",
    message: "jlskd dfjldskjf dsjdfslmkfds dfsmlkjdsf dfsmlksdf"
});
toto.save();*/

//réception du formulaire
app.post('/contact.ejs', (req, res) => {  /*Recevoir*/
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.telephone);
    console.log(req.body.subject);
    console.log(req.body.message);
    
    const Object = new client ({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        subject: req.body.subject,
        message: req.body.message    
    });

    Object.save((err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Client créé');
        }
    }); 
});

app.listen(3001);