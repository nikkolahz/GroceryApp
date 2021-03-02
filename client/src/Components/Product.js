import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Dropdown, DropdownMenu,Container,Row,Col,ListGroup,ListGroupItem, Card, Button} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import ProductChart from './ProductChart'


function Product(props) {
const catchedId=props.match.params.id;
const chartData=[];
const  [product, setProduct]=useState({
    price:[{
    store:'',
    size:'',
    uniCost:0.0,
    date:''
  }]  }
);

const [priceIndex, setPriceIndex]=useState(0);


  useEffect(()=>{

   Axios.get(`${process.env.REACT_APP_SERVER_URL}/products/id=${catchedId}`)
   .then((response)=>{
       console.log(process.env.SERVER_URL)
     setProduct(response.data);
     console.log(product.price)

     })
   .catch((err)=>{
     console.log(err)
   })

 },[])

const handleDropDownClick=option=>{
  setPriceIndex(option)
}

const handleEdit=()=>{
  console.log("eidt Button is clicked!")
}

  return (
    <Container fluid >
      <Row className="centered">
          <Card style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              Php {product.price[priceIndex]!==undefined?product.price[priceIndex].unitCost:"no data"}
              </Card.Subtitle>
              <ListGroup variant='flush'>
              <ListGroupItem> Brand: {product.brand}</ListGroupItem>
              <ListGroupItem> Category: {product.category}</ListGroupItem>
              <ListGroupItem> Store:{product.price[priceIndex]!==undefined?product.price[priceIndex].store:"no data"}</ListGroupItem>
              <ListGroupItem> Date: {product.price[priceIndex]!==undefined?new Date(product.price[priceIndex].date).toLocaleDateString():"no data"}</ListGroupItem>
              </ListGroup>
              <Dropdown style={{margin: '10px'}}id='dropdown-basic'onSelect={handleDropDownClick}>
                <Dropdown.Toggle block variant='dark'>Price</Dropdown.Toggle>
                <Dropdown.Menu>
                  {product.price.map((val,key)=>{
                    return<Dropdown.Item eventKey={key}  key={key}>{key} - {val.store} - {new Date(val.date).toLocaleDateString()}</Dropdown.Item>
                  })}
              </Dropdown.Menu>
              </Dropdown>
              <Container fluid>
                <Row>
                  <Col xs={8} lg={8}></Col>
                  <Col xs={2} lg={2}><Icon.PencilFill onClick={handleEdit} size={20}/></Col>
                  <Col xs={2} lg={2}><Icon.FileEarmarkXFill size={20}/></Col>
                </Row></Container>
            </Card.Body>
          </Card>
          </Row>
          <Row className="centered">
            <h1>Price Chart</h1></Row>
          <Row className="centered">

            <ProductChart size={{width:500, height:300}} product={product}/>
          </Row>


    </Container>
  )
}

export default Product
