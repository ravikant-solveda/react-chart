import React from 'react'
import Chart from 'react-apexcharts'

const StackedBarChart = () => {
  return (
    <React.Fragment>
      <div className='container-fluid my-3'>
        <h3>StackedBarChart - Using the apexCharts</h3>

        {/* <Chart
            type='bar'
            width={700}
            height={360}
        >

        </Chart> */}

        <Chart
            type='bar'
            width={800}
            height={330}

            series={[
                {
                    name: "Hyro-electric",
                    data: [45, 76,13,93,26,84],

                },
                {
                    name: "Aero-electric",
                    data: [45, 36,73,43,56,14]

                },
                {
                    name: "Cloud-electric",
                    data: [15, 36,73,43,96,85]

                },
                {
                    name: "Wind-electric",
                    data: [65, 16,33,53,96,44]

                }
            ]}

            options={{
                title:{
                    text:"Energy cosumption in Years"
                },
                chart:{
                    stacked: true,
                },
                plotOptions:{  // change orientation
                    bar:{
                        horizontal: true,  // swithed to the horizontal orientation
                        // columnWidth:20
                    }
                },
                // stroke:{
                //     width:1,  // add border
                // },
                xaxis:{
                    title:{
                        text: "Energy Consumptio in Year",
                        style:{
                            fontSize:'20',
                            color: 'red'
                        }
                    },
                    categories: ['2017','2018','2019','2020','2021','2022']
                },
                yaxis:{
                    title:{
                        text:"Data in (K)",
                        style:{
                            fontSize:'20',
                            color:'green'
                        }
                    }
                },
                grid:{  // to show/hide background lines 
                    show: true, // on :false => background grid got hidden
                    xaxis:{
                        lines:{
                            show: false,
                        }
                    },
                    yaxis:{
                        lines:{
                            show:false,
                        }
                    }

                },
                // dataLabels:{
                //     enabled:false  // it will remove the by default property of showing the the % value on each bar.
                // },
                // legend:{
                //     position: 'top'  // take the each bullet point to top 
                                        // bottom is by default
                // }
                
            }} 
        
        >

            
        </Chart>

      </div>

    </React.Fragment>
  )
}

export default StackedBarChart