import React ,{useState} from 'react';
import classes from './ProgressBar.module.css';
import '../../../src/custom.scss'
const ProgressBar = () => {
  const [progress, setProgress] = useState();
  const handleProgress = (num)=>{
    console.log(num, 'rrrrrrrrrrrrrr')
    switch(num){
      case 4:
        setProgress("0%");
        break;
      case 5:
        setProgress("17%");
        break;
      case 6:
        setProgress("34%");
        break;
      case 7:
        setProgress("51%");
        break;
      case 8:
        setProgress("68%");
        break;
      default:
        break;
    }
  }
  return (
    <React.Fragment>
        <div class="position-relative m-4">
            <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="70" style={{height:"1px"}}>
                <div class="progress-bar" style={{ width: `${progress}`}}></div>
            </div>
            {/* <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem", height:"2rem"}}>1</button>
            <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem", height:"2rem"}}>2</button>
            <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: "2rem", height:"2rem"}}>3</button> */}
            <button type="button" class={`position-absolute top-0 start-30 translate-middle btn btn-sm btn-primary rounded-pill`} style={{width: "2rem", height:"2rem"}} onClick={()=>handleProgress(4)}>4</button>
            <button type="button" class={`position-absolute top-0 ${classes.customStart1} translate-middle btn btn-sm btn-primary border-light `} onClick={()=>handleProgress(5)}>FIFTH</button>
            <button type="button" class={`position-absolute top-0 ${classes.customStart2} translate-middle btn btn-sm btn-primary `} style={{width: "2rem", height:"2rem"}} onClick={()=>handleProgress(6)}>6</button>
            <button type="button" class={`position-absolute top-0 ${classes.customStart3} translate-middle btn btn-sm btn-primary `} style={{width: "2rem", height:"2rem"}} onClick={()=>handleProgress(7)}>7</button>
            <button type="button" class={`position-absolute top-0 ${classes.customStart4} translate-middle btn btn-sm btn-primary rounded-pill`} style={{width: "2rem", height:"2rem"}} onClick={()=>handleProgress(8)}>8</button>

        </div>
        <div>
             <div className='text-center'>
              hello my name is waht ever
             </div>
          
        </div>

    </React.Fragment>
  )
}

export default ProgressBar