import React,{useState,useEffect} from 'react'
import {Container, Form,Button,Row,Col, Table} from 'react-bootstrap'
import Axios from 'axios'
import * as Icon from 'react-bootstrap-icons'
import * as ProductsAPI from '../utils/ProductsAPI'

function CreateReceipt() {
  const criteria=['','name','brand', 'category']
  const [searchQuery, setSearchQuery]=useState({params:{}});
  const [searchResults,setSearchResults]=useState([]);
  const [productToAdd,setProductToAdd]=useState({
    products:[]
  });

  const handleKeyChange=(event)=>{
    setSearchQuery((prevVal)=>({
      ...prevVal,
      params:{
        ...prevVal.params,
      key:event.target.value}
    }));

  }

const handleValueChange=(event)=>{
  setSearchQuery((prevVal)=>({
    ...prevVal,
    params:{
    ...prevVal.params,
    value:event.target.value}
  }));
}
async function handleAddProduct(val){
const newProd=await ProductsAPI.getProductsById(val)

  setProductToAdd((prevVal)=>{
   return({
       ...prevVal,
       products:prevVal.products.concat([newProd])
   });
  });
}

async function handleButtonClick(){
  setSearchResults(await ProductsAPI.getProductsByParam(searchQuery.params))
}

const renderComponent=()=>{
  console.log(productToAdd)
  return(
    <div>
      <Table striped bordered hover responsive='sm' size='sm'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Size</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
    <tbody>
      {
        searchResults.map((val,key)=>{
          return (
            <tr key={key} >
            <td>{val.name}</td>
            <td>{val.brand}</td>
            <td>{val.category}</td>
            <td>{val.price[0]!==undefined?val.price[0].size:"no data"}</td>
            <td>{val.price[0]!==undefined?val.price[0].unitCost:"no data"}</td>
            <td><Icon.BagPlusFill size={20} onClick={()=>handleAddProduct(val._id)}/></td>
          </tr>

          )

        })}



    </tbody>
  </Table></div>)
}
// useEffect(()=>{
// console.log(searchResults)
//
// },[searchResults])


  return (
    <Container>
    <Row style={{margin:'15px'}}>
      <Col md={8} xs={6}></Col>
      <Col md={2} xs={4}><h6>Receipt</h6></Col>
      <Col md={2} xs={2}><Icon.Cart size={30}/></Col>

    </Row>

      <Form>
        <Form.Label >Search for Products to Add:</Form.Label>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control onChange={handleValueChange} placeholder="Key Word" type="text">
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Control onChange={handleKeyChange} as="select">
          {criteria.map((val,key)=>{
            return(<option key={key}>{val}</option>)
          })}
          </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Button onClick={handleButtonClick} block variant='dark'>Search</Button>
          </Form.Group>
        </Form.Row>
        <Form.Row></Form.Row>
      </Form>
        {renderComponent()}
    </Container>
  )
}

export default CreateReceipt
