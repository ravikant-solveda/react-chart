import React from 'react'
import classes from './PositionProperty.module.css'
const PositionProperty = () => {
  return (
    <React.Fragment>
        <h4>position-absolute will work accroding to it's latest *positoned* parent</h4>
        <div className='my-5'>
        <div className='position-relative bg-primary my-5'>
         primary Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            <div className='bg-secondary position-absolute top-50 start-50'>
                secondary Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                <div className='bg-warning position-absolute top-50 start-50' >
                    warning Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
                    <div className='position-absolute bg-danger top-0 end-50 '>
                        danger 
                    </div>
                </div>
            </div>
        </div>
        </div>

       

    </React.Fragment>
  )
}

export default PositionProperty