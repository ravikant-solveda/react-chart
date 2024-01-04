import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const PieChart = () => {
    const [subjectName, setSUbjectName] = useState([]);
    const [subjectValue, setSubjectValue] = useState([]);
    const subjectMarks = [
        {
            subject_name: 'Hindi',
            subject_value: 23
        },
        {
            subject_name: 'Math',
            subject_value: 34
        },
        {
            subject_name: 'English',
            subject_value: 45
        },
        {
            subject_name: 'Social Media',
            subject_value: 50
        },
        {
            subject_name: 'Geography',
            subject_value: 17
        },
    ]

    useEffect(() => {
        // Extract social media titles
        const names =  subjectMarks.map(item => item.subject_name);
        setSUbjectName(names);
    
        // Extract social media subscribers
        const values = subjectMarks.map(item => +item.subject_value);
        setSubjectValue(values);
      }, []);

  return (
    <React.Fragment>
        <div className='container-fluid'>
            <h4 className='py-2'>Welcome to PieChart</h4>
            <Chart 
                type='pie'
                width={850}
                height={390}

                // series={[23,34,45,50,12]}

                series={subjectValue}

                options={{
                    title:{
                        text:"Student PieChart",
                    },
                    noDatat: "No Data Available",
                    // labels: ['Hindi', "Math", "English", "Social Science","Grography"]
                    labels: subjectName,
                    // colors: ['','','','',]
                }}
            >

            </Chart>
        </div>
    </React.Fragment>
  )
}

export default PieChart