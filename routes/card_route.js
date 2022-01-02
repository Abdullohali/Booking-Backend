const express = require('express');
const card_shema = require('../schema/card_shema');
const router = express.Router();

const Card = require('../schema/card_shema');

router.get('/', async (req, res) => {
    var data = await Card.find();
    res.send(data);
});
router.post('/', async (req, res) => {
    var data = await Card.create(
        {
            cardNumber: req.body.cardNumber,
            expiry: req.body.expiry,
            cvv: req.body.cvv,
            name: req.body.name,

        });
    res.send(data);
});
router.delete('/',async (req, res) => {
    var data = await card_shema.findOneAndDelete({cardNumber: req.body.cardNumber});
    res.send(data);
  });

module.exports = router;