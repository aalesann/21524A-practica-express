// const router = require('express').Router();

const { Router } = require('express');
const router = Router()


const users = [
    {
        username: "zx",
        name: "Zeus",
        lastname: "Sanabria"
    },
    {
        username: "johnw",
        name: "Jhon",
        lastname: "Wick"
    },
    {
        username: "lauras",
        name: "Laura",
        lastname: "Smith"
    }
]

router.get('/', function (req, res) {
    res.render('home', { users })
})

router.get('/obtener-usuarios',  (req, res) => { 
    res.json(users)
})

module.exports = router;