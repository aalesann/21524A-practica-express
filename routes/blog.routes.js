// const router = require('express').Router();

const { Router } = require('express');
const { getPosts, newPost } = require('../controllers/blog.controllers');
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

router.post('/nueva-publicacion', newPost)

router.get('/obtener-publicaciones', getPosts )

module.exports = router;