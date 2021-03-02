import Axios from 'axios'
const ORDERS_BASE_URL = `${process.env.REACT_APP_SERVER_URL}/orders`
export async function postOrder(order){
  let results={}
  await Axios.post(`${process.env.REACT_APP_SERVER_URL}/orders/insert`,order)
  .then((response)=>{
   results=response.data
  })
  .catch((err)=>{
   console.log(err)
  })
return results
}

export async function getAllOrders(){
  let results={}
  await Axios.get(`${ORDERS_BASE_URL}/`)
    .then((response)=>{
     results=response.data
    })
    .catch((err)=>{
      console.log(err);
    })
    return results
  }
