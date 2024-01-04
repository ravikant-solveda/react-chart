import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const Linechart = () => {
  const [product, setProduct] = useState([
    {
      name: 'T-shirt',
      data:[234,45,76,987,345,456,87,321,543,567,73,890]
    },
    {
      name: "Shirt",
      data:[562,645,267,97,45,156,76,453,234,786,431,20]
    },
    {
      name: "Jeans",
      data:[1012,345,917,697,845,56,287,1312,1845,543,306,120]
    }
  ])
  const [option, setOption] = useState({ 
    title: {
      text: "Product sell in 2023"
    },
    xaxis:{
      title:{
        text:'Product sell in Month'
      },
      categories:['Jan', "Fab", "Mar", "Apr","May","Jun","jul","Aug","Sep","Oct","Nov","Dev"]
    }
    ,
    yaxis:{
      title:{
        text:"Product in K",
      }

    }

  })
  return (
    <React.Fragment>
      <div className='container-fluid my-3'>
      <h4>Line Chart - Using the apexChart </h4>

      <Chart 
        type='line'
        width={1000}
        height={350}
        series={product}

        // series={[
        //   {
        //     name: 'Product',
        //     data:[4,6,3,8,4]
        //   },
        //   {
        //     name: "Shirt",
        //     data:[8,6,3,7,2]
        //   },
        //   {
        //     name: "Jeans",
        //     data:[12,6,1,7,1]
        //   }
        // ]}

        options={option}
        
        // options={{ 
        //   title: {
        //     text: "Product sell in 2023"
        //   },
        //   xaxis:{
        //     title:{
        //       text:'Product sell in Month'
        //     },
        //     categories:['Jan', "Fab", "Mar", "Apr","May","Jun","jul","Aug","Sep","Oct","Nov","Dev"]
        //   }
        //   ,
        //   yaxis:{
        //     title:{
        //       text:"Product in K",
        //     }

        //   }

        // }}
               
      >

      </Chart>
      </div>
    </React.Fragment>
  )
}

export default Linechart