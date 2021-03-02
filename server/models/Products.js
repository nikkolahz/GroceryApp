const mongoose = require ('mongoose')

const ProductSchema = mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  brand:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  price:[
    {
      store: {
        type:String,
        required: false
      },
      size: {
        type:String,
        required: false
      },
      unitCost: {
        type:Number,
        required: false
      },
      date:{
        type: Date,
        default: Date.now()
      }
    }
  ]
})

 const getProductSchema=()=>{
  return ProductSchema
}

 const ProductModel= mongoose.model('products', ProductSchema)

module.exports={ProductSchema, ProductModel}
