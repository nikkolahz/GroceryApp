const express =require('express')
const mongoose = require('mongoose')
const cors =require('cors');
const productsRoute = require('./routes/products')
const ordersRoute = require('./routes/orders')



const app = express();

//connecting with the mongoose database
mongoose.connect("mongodb://localhost:27017/Grocery",
{useNewUrlParser : true});

//MiddleWares
app.use(cors());
app.use(express.json())
app.use('/products', productsRoute)
app.use('/orders',ordersRoute)


//Routes
app.get('/', (req, res)=>{
res.send("So ths is the server!")

})

app.get('/readAll', (req,res)=>{
  res.send("You are in read all route!")
})


//Listening to the server

app.listen(3001,()=>{
  console.log("Server is running in port 3001")
});
