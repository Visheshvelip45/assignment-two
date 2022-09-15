
import React from 'react'

import './style.css'
<head>

</head>

const Main = () => {
  return (
    
    <div class ="center">
    <h1 align ="center">Products</h1>
    <div class ="main_card">
    
    <div class="row">
    
    <div class="column" >
      
          <img style={{border:0,magrin:0}} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
          </img>
        
      <div className='price-back' style={{border:0,magrin:0}}>
        <p><b>Headphones</b></p>
        <p>Rs. 5000/-</p>
        <div className='checked'>
        
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
      </div>
    </div>
    


    <div class="column">
    <img style={{border:0,magrin:0}} src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image"></img>
    <div className='price-back' style={{border:0,magrin:0}}>
      <p><b>Smart watche</b></p>
      <p>Rs. 3000/-</p>
    </div>
    </div>


    <div class="column">
    <div class="cardImage"><img style={{border:0,magrin:0}} src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image"></img></div>
    <div className='price-back' style={{border:0,magrin:0}}>
      <p><b>Camera</b></p>
      <p>Rs. 35000/-</p>
    </div>
    </div>
    

    <div class="column">
    <div class="cardImage"><img style={{border:0,magrin:0}} src="https://images.unsplash.com/photo-1525740562071-12e4266effe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFuYWxvZyUyMHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image"></img></div>
    <div className='price-back' style={{border:0,magrin:0}}>
      <p><b>Analog Watch</b></p>
      <p1>Rs. 1000/-</p1>
    </div>
    </div>
    
    </div>
    </div>    
    </div>
    
  )
}

export default Main