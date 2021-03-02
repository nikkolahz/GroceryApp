import React, {useState, useEffect} from 'react'
import {Button, Container} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import * as OrdersAPI from '../utils/OrdersAPI'
import Axios from 'axios'

function Receipts() {
  const history = useHistory()
  const [receipt, setReceipt]=useState({});

  const [orders,setOrders]=useState([]);

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
   OrdersAPI.postOrder({})
  .then((results)=>{
    console.log(results._id)
    history.push(`/receipts/create/${results._id}`)
  })
  .catch((err)=>{
    console.log(err)
  })


      }

  useEffect(()=>{
    OrdersAPI.getAllOrders()
    .then(results=>{
      setOrders(results)
    })
    .catch((err)=>{
      console.log(err)
    })
      }, [])

  return (
    <Container>

      <Button  onClick={handleCreateNewReceipt} style={{margin:'15px'}} variant='dark'>
      Create New Receipt
      </Button>

            {orders.map((val,key)=>{
              return(<Link style={{color:'#252525'}} to={`/receipts/create/${val._id}`}>
                <p key={key}>{val._id}</p>
              </Link>)
            })}
    </Container>
  )
}

export default Receipts
