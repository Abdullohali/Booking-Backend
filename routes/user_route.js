const express = require('express');
const user_schema = require('../schema/user_schema');
const router = express.Router();

const User = require('../schema/user_schema');

router.get('/', async (req, res) => {
    var data = await User.find();
    res.send(data);
});
router.post('/', async (req, res) => {
    var data = await User.create(
        {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            address: req.body.address,
            postcode: req.body.address,
            country: req.body.country,
            phone: req.body.phone
            
        },);
    res.send(data);
});
router.delete('/',async (req, res) => {
    var data = await user_schema.findOneAndDelete({name: req.body.name});
    res.send(data);
  });

module.exports = router;