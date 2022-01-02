const mongoose = require('mongoose');

var hotelsShema = mongoose.Schema({
   country: {
       type: String,
       required: true,
   },
   city: {
       type: String,
       required: true,
   },
   phone: {
       type: String,
       required: true,
   },
   name: {
       type: String,
       required: true,
   },
   kmcenter: {
       type: Number,
   },
   stars: {
       type: Number,
   },
   price:{
       type:Number,
       required: true
   },
   img: {
       type: String,
       required: true,
   }

});

module.exports = mongoose.model("Hotels", hotelsShema);