import React from 'react'
import  classes from '../carousol/carousol.module.css'
const Carousol = ({img}) => {
  return (
      <>
          <div  className={classes.main}>
              <img src={img} alt="" />
          </div>
      </>
  )
}

export default Carousol