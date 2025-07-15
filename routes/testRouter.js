const express =require('express');
const { testingController } = require('../controllers/testController');

//router object
const router =express.Router()

//Routes
router.get('/',testingController);
router.get('/hii', (req, rep) =>{
    return rep.send("<h1>heeloo</h1>");
})

//export
module.exports = router