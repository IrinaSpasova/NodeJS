// const {Router} =require('express');

//or:
const router = require('express').Router();

// if we need to redirect logged user if he try to login- we need gards after register:
router.get('/register',(req,res) =>{
    //for the test put "layout: false":
    res.render('register', {layout: false});
});

router.get('/login', (req,res) =>{
    //for the test put "layout: false":
    res.render('login', {layout: false});
})
module.exports = router;