import Axios from 'axios'

const PRODUCTS_BASE_URL =`${process.env.REACT_APP_SERVER_URL}/products`

/**
 * getProductsByParam - fetch Products JSON data from DB
 *@param {{key:string, value:string}} params JSON key-value pair
 *
 */
export const getProductsByParam=(params)=>{
  const data = Axios.get(`${PRODUCTS_BASE_URL}/?${params.key}=${params.value}`)
    .then((response)=>{
     return response.data;
    })
    .catch((err)=>{
      console.log(err);
    })
    return data
  }

/**
 *getProductsById - fetch Products JSON daa from DB
 *@param {id:ObjectID} id ObjectID from MongoDB
 */
export const getProductsById=(id)=>{
  const data= Axios.get(`${PRODUCTS_BASE_URL}/id=${id}`)
    .then((response)=>{
      return response.data;
    })
    .catch((err)=>{
      console.log(err);
    })
    return data;
}
