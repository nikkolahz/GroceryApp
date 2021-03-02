import React, {useState, useEffect} from 'react'
import {Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Receipts() {
  const [receipt, setReceipt]=useState({
    totalPrice: 0.0,
    store:'',
    products:[
      {price: 25.0},
      {price:26.3}
    ],
}
  );

  const getTotal = ()=>{
    const currentProducts = receipt;
    console.log(currentProducts)
    const total =currentProducts.products.reduce((sum,currentValue)=>{
      return sum+currentValue.price;
    },0)
    console.log(total)
    setReceipt(prevVal=>({
      ...prevVal,
      totalPrice:total
    }));
}

  const handleCreateNewReceipt=()=>{
    setReceipt(prevVal=>({
      ...prevVal,
      totalPrice:prevVal.totalPrice+1
      }));
      
      }

  useEffect(()=>{

    }, [receipt])

  return (
    <Container>
    <Link style={{color:'#252525'}} to='/receipts/create'>
      <Button  style={{margin:'15px'}} variant='dark'>
      Create New Receipt
      </Button>
      </Link>
    </Container>
  )
}

export default Receipts
