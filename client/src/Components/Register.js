import React, {useState, useEffect} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import Axios from 'axios'

function Register() {
const [newProduct, setNewProduct]=useState({});



const handleClick=()=>{
  console.log(newProduct)

  Axios.post(`${process.env.REACT_APP_SERVER_URL}/products/insert`,newProduct)
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
}

const handleNameChange=(event)=>{
  setNewProduct((prevVal)=>({
    ...prevVal,
    name:event.target.value
  }))
}
const handleBrandChange=(event)=>{
  setNewProduct((prevVal)=>({
    ...prevVal,
    brand:event.target.value
  }))
}
const handleCategoryChange=(event)=>{
  setNewProduct((prevVal)=>({
    ...prevVal,
    category:event.target.value
  }))
}
  return (
    <div>
    <Form>
        <Form.Label>Enter Product Details:</Form.Label>
    <Form.Row>
      <Form.Group as={Col}>
        <Form.Control onChange={handleNameChange}placeholder='Enter product name' type='text'/>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Control onChange={handleBrandChange} placeholder='Enter product brand' type='text'/>
      </Form.Group>
      <Form.Group as ={Col}>
        <Form.Control onChange={handleCategoryChange} placeholder='Enter product category' type='text'/>
      </Form.Group>
    </Form.Row>
      <Button onClick={handleClick} variant='dark'>Register</Button>

    </Form>
    </div>
  )
}

export default Register
