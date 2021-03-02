const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

//Get Router

router.get('/', async (req,res)=>{
  await Product.find(req.query, (err, result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  })
});

router.get('/id=:id', async (req,res)=>{
  let productId = req.params.id;
  await Product.findById(productId, (err, result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  })
});

router.get('/name=:name',async(req, res)=>{
  const nameQuery = req.params.name;
  await Product.find({"name":nameQuery},(err,result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  });
})

router.get('/brand=:brand',async(req, res)=>{
  const brandQuery = req.params.brand;
  await Product.find({"brand":brandQuery},(err,result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  });
})

router.get('/category=:category',async(req, res)=>{
  const categoryQuery = req.params.category;
  await Product.find({"category":categoryQuery},(err,result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  });
})

router.get('/store=:store',async(req, res)=>{
  const storeQuery = req.params.store;
  await Product.find({"price.store":storeQuery},(err,result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  });
})

//Post Router
router.post('/insert', async (req,res)=>{

//creating a dummy object to receive posted Item
    const newProduct = req.body;
    const newProductModel = new Product(newProduct
    // {
    //   "name": newProduct.name,
    //   "brand": newProduct.brand,
    //   "category": newProduct.category,
    // }
    );
//Saving the created Model to the database of mongoDB.
    try {
      await newProductModel.save();

    } catch (e) {
      console.log(e);
      res.json({message:e});
    }
//send something from the server to the client side as a handshake?
res.send(newProductModel);

});

module.exports = router;
