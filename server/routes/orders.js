const express = require('express');
const router = express.Router();
const {OrdersModel}= require('../models/Orders');

const Orders = OrdersModel

router.get('/', async (req,res)=>{
  await Orders.find(req.query, (err, result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  })
});

router.get('/id=:id', async (req,res)=>{
  let productId = req.params.id;
  await Orders.findById(productId, (err, result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  })
});

router.post('/insert',async(req,res)=>{
  const newOrder= req.body;
  const newOrderModel = new Orders(newOrder);
  //Saving the created Model to the database of mongoDB.
      try {
        await newOrderModel.save();
      } catch (e) {
        console.log(e);
        }
  //send something from the server to the client side as a handshake?
 res.send(newOrderModel);
})


module.exports = router
