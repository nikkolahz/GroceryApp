import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {Table, Container}from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
function Products() {
const [products, setProducts]=useState([]);

useEffect(()=>{
 Axios.get(`${process.env.REACT_APP_SERVER_URL}/products/`)
 .then((response)=>{
   setProducts(response.data);

 })
 .catch((err)=>{
   console.log(err)
 })

},[])
  return (
    <Container>

      <h1>Products</h1>

          <Table striped bordered hover responsive='sm' size='sm'>
            <thead>

              <tr>
                <th>Item No.</th>

                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
              </tr>

            </thead>
            <tbody>

              {
                products.map((val,key)=>{
                  return (
                    <tr key={key}>
                    <td >
                      <Link style={{color:'black'}}to={`/products/${val._id}`}>
                        {key}
                      </Link>
                    </td>
                    <td>{val.name}</td>
                    <td>{val.brand}</td>
                    <td>{val.category}</td>
                    <td>{val.price[0]!== undefined?val.price[0].unitCost:"no data"}</td>
                    </tr>

                  )

                })}



            </tbody>
          </Table>
          <Link style={{position:'relative',color:'#252525'}}to="/products/register"><Icon.PlusCircleFill size={50}/></Link>

</Container >
  )
}

export default Products
