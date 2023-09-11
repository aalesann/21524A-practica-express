// const router = require('express').Router();

const { Router } = require('express');
const { getPosts, newPost, updatePost, deletePost } = require('../controllers/blog.controllers');
const router = Router()


router.get('/', function (req, res) {
    res.render('home')
})

router.get('/publicaciones', getPosts)

router.post('/publicacion', newPost)

router.put('/publicacion/:id', updatePost)

router.delete('/publicacion/:id', deletePost)


module.exports = router;