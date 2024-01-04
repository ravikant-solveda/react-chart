import React from 'react'
import Chart from 'react-apexcharts'
const Donut = () => {
  return (
    <React.Fragment>
        <div className='container-fluid my-3'>
        <h4>Donut Chart - Using the apexChart</h4>

        <Chart
        type='donut'
            width={600}
            height={530}
             
            series={[45,67,34,65,76]}
            options={{
                labels: ['USA','CHINA','RUSSIA','INDIA','UK'],
                title:{
                    text:"Medal Country Name"
                },
                plotOptions:{
                    pie:{
                        donut:{
                            labels:{
                                show:true,  //onHover, corresponding value will start showing in middle of donut.
                                total:{
                                    show: true,   // it will show by default total of the data without hovering on any one of items.
                                    // showAlways: true , // it nullified the hover effect, only the total value will be shown in middle; not the hovering elements.
                                    fontSize:30,
                                    color:"#f90000"
                                }
                            }
                        }
                    }
                },
                dataLabels:{
                    enabled:true //  it will remove the by default % value of the each part of donut.
                                  // : true is default property which will show the % value of each part.
                }
            }}
        >


        </Chart>
        </div>

    </React.Fragment>
  )
}

export default Donut