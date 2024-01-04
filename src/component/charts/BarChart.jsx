import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const BarChart = () => {
  const [socialName, setSocialName] = useState([]);
  const [socialValue, setSocialValue] = useState([]);

  const socialData = [
    {
      socialmedia_title: 'Facebook',
      socialmedia_subscriber: '235432'
    },
    {
      socialmedia_title: 'Twitter',
      socialmedia_subscriber: '557532'
    },
    {
      socialmedia_title: 'LinkedIn',
      socialmedia_subscriber: '135432'
    },
    {
      socialmedia_title: 'Instagram',
      socialmedia_subscriber: '335432'
    },
    {
      socialmedia_title: 'StackOverFlow',
      socialmedia_subscriber: '265432'
    },
    {
      socialmedia_title: 'YouTube',
      socialmedia_subscriber: '315432'
    },

    {
      socialmedia_title: 'Facebook',
      socialmedia_subscriber: '235432'
    }
  ]

  useEffect(() => {
    // Extract social media titles
    const names = socialData.map(item => item.socialmedia_title);
    setSocialName(names);

    // Extract social media subscribers
    const values = socialData.map(item => item.socialmedia_subscriber);
    setSocialValue(values);
  }, []);

  return (
    <div>BarChart


      <Chart
        type='bar'
        width={850}
        height={390}
        series={[
          {
            name: 'social media suscriber',
            // data: [6578, 3435 , 3546,7686, 9767, 6234,8543],
            data: socialValue
           
          }
        ]}

        options={{
            
            title: {
              text: 'BarChart developed by dev teams',
              style: {fontSize: 30}
            },
            subtitle:{
              text:"This is BarChart Graph",
              style:{
                fontSize:14
              }
            },
            colors:['#f90000'],
            theme: {mode: 'light'},
            xaxis: {
              tickPlacement:'on',
              // categories: ['Facebook', "Twitter", "LinkedIn","Instagram","GitHub", "StockOverFlow", "YouTube"],
              categories: socialName,
              title: {
                text:"Social Media Users",
                // style:{color:'#f90000'}
              }
            },
            yaxis:{
              labels:{
                formatter:(val)=>{ return `$${val}`},
                style:{
                  colors:['#f90000'],
                  fontSize:15,

                }
              },
              title: {
                text:"Users in (K)",
                style:{color:'#f90000'}
              }
            },

            legend:{
              show:true,
              position:"right",
            },
            dataLabels:{
              //add $ sign in each bar line
              // formatter: (val)=>{return ` $${val}`},
              style:{
                colors:["#fff"],
                fontSize: 13
              }
            }

        }}  
>
      </Chart>

      
    </div>
  )
}

export default BarChart