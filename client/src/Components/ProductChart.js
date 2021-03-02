import React, {useEffect,useState} from 'react'
import {ResponsiveContainer, LineChart, Line, Legend,CartesianGrid, XAxis, YAxis, Tooltip }  from 'recharts'




function ProductChart(props) {
const [chartData, setChartData]=useState([]);



useEffect(()=>{


},[]);

  return (


    <LineChart width={props.size.width} height={props.size.height} data={props.product.price}>
    <CartesianGrid strokeDasharray="4 4"/>
    <XAxis dataKey="date"/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
    <Line type='monotone' dataKey='unitCost'/>
    </LineChart>


  )
}

export default ProductChart
