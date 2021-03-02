import Axios from 'axios'

export const PRODUCTS_BASE_URL =`${process.env.REACT_APP_SERVER_URL}/products`

/**
 * getProductsByParam - fetch Products JSON data from DB
 *@param {{key:string, value:string}} params JSON key-value pair
 *
 */
export async function getProductsByParam(params){
  const data = await Axios.get(`${PRODUCTS_BASE_URL}/?${params.key}=${params.value}`)
    .then((response)=>{
     console.log(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    return data
  }

  export async function getAllProducts(){
    let results={}
    await Axios.get(`${PRODUCTS_BASE_URL}/`)
      .then((response)=>{
       results=response.data
      })
      .catch((err)=>{
        console.log(err);
      })
      return results
    }


/**
 *getProductsById - fetch Products JSON daa from DB
 *@param {id:ObjectID} id ObjectID from MongoDB
 */
export async function getProductsById(id){
  let results={}
  await Axios.get(`${PRODUCTS_BASE_URL}/id=${id}`)
    .then((response)=>{
    results= response.data;
    })
    .catch((err)=>{
      console.log(err);
    })
    return results;
}

export async function postProduct(product){
  let results={}
   await Axios.post(`${process.env.REACT_APP_SERVER_URL}/products/insert`,product)
  .then((response)=>{
    results=response.data
  })
  .catch((err)=>{
    console.log(err)
  })
return results
}
