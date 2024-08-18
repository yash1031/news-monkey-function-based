import React, { Component } from 'react'
import loader from './loader.gif'
const spinner=()=> {  
    return (
      <div className='text-center my-1'>
        <img src={loader} style={{height:"100px"}} alt="Reloading" />
      </div>
    )
}
export default spinner

