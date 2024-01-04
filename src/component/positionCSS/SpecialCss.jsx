import React from 'react';
import classes from './SpecialCss.module.css'

const SpecialCss = () => {
  return (
   <React.Fragment>
    <div className="fw-bold fs-1 ms-3 text-">
        I
    </div>

    <div className={`${classes.heart}`}>

    </div>

    <span className={`${classes.india}  my-5 p-4 fs-1 fw-bold `} style={{marginLeft: '200px'}}>
        INDIA
    </span>
   </React.Fragment>
  )
}

export default SpecialCss