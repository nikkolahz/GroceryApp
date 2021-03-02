const mongoose = require('mongoose')
const {ProductSchema} = require('./Products');


// const  OrdersSchema=new mongoose.Schema({
//   totalPrice:{
//     type:Number
//   },
//   products:[ProductSchema]
// })

const  OrdersSchema=new mongoose.Schema({
  totalPrice:{
    type:Number
  },
  products:[{type: mongoose.Schema.Types.ObjectID, ref:'ProductSchema'}]
})
const OrdersModel = mongoose.model('orders', OrdersSchema)
module.exports= {OrdersSchema,OrdersModel}
