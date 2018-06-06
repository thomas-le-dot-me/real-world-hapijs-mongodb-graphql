const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
   sku : String,
   title: String,
   description: String,
   quantity : Number,
   pricing : {
       price: Number,
       compare_at_price: Number
   }

});

module.exports = mongoose.model('Product', ProductSchema);