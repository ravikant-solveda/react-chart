import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { useSearchParams } from 'react-router-dom'
const AreaChart = () => {
    // const [gitYear, setGitYear] = useState([]);
    // const [gitCommitNumber, setGitCommitNumber] = useEffect([]);

    // const gitCommit = [
    //     {
    //         gitCommit_number: 150,
    //         git_year: 2007
    //     },
    //     {
    //         gitCommit_number: 450,
    //         git_year: 2008
    //     },
    //     {
    //         gitCommit_number: 150,
    //         git_year: 2009
    //     },
    //     {
    //         gitCommit_number: 150,
    //         git_year: 2010
    //     },
    //     {
    //         gitCommit_number: 150,
    //         git_year: 2011
    //     },
    //     {
    //         gitCommit_number: 150,
    //         git_year: 2012
    //     }
    // ]

    // useEffect(() => {
    //     // Extract social media titles
    //     const names = gitCommit.map(item => item.git_year);
    //     setGitYear(names);
    
    //     // Extract social media subscribers
    //     const values = gitCommit.map(item => item.gitCommit_number);
    //     setGitCommitNumber(values);
    //   }, []);

    
  return (
    <React.Fragment>
        <div className='container-fluid mb-3 mt-3'>

            <h3>AreaChart GitHub Style</h3>
        </div> 
        <Chart
            type='area'
            width={900}
            height={350}

            series={[
                {
                    name: 'commits',
                    data: [150,841,234,30,234,23,353,233,646]
                    // data: {gitCommitNumber}
                }
            ]}
            options={{
                title:{
                    text: 'AreaChart GitHub style',
                    style:{
                        fontSize:20
                    }
                },
                colors: ["#f90000"],
                stroke: {width:0,curve: "smooth"},  // boundary line dark nahi rahegi
                fill: {opacity:1},  // 

                xaxis:{
                    title:{
                        text: "Commit in year",
                        style: {
                            fontSize: 10,
                            color: '#f90000'
                        }
                    },
                    categories:[2008,2009,2010,2011,2012,2013,2014,2015,2016 ]
                    // categories: {gitYear}
                },
                yaxis:{
                    title:{
                        text: "No. of Commits",
                        style:{
                            fontSize:20
                        }
                    }
                }

            }}
        >

        </Chart>
    </React.Fragment>
  )
}

export default AreaChart