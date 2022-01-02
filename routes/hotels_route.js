const express = require('express');
const hotels_schema = require('../schema/hotels_schema');
const router = express.Router();

const Hotels = require('../schema/hotels_schema');

router.get('/', async (req, res) => {
    var data = await Hotels.find();
    res.send(data);
});
router.post('/', async (req, res) => {
    var data = await Hotels.create(
        {
           country: req.body.country,
           city: req.body.city,
           phone: req.body.phone,
           name: req.body.name,
           kmcenter: req.body.kmcenter,
           stars: req.body.stars,
           price: req.body.price,
           img: req.body.img,
        },);
    res.send(data);
});
  router.delete('/',async (req, res) => {
    var data = await hotels_schema.findOneAndDelete({country: req.body.country});
    res.send(data);
  });

module.exports = router;