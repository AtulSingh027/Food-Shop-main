import React from 'react'
import "./Cart.css"

export default function Cart({Add}) {
  

   
  return (
        
          <div className="AddedCarts">
              <div>
                <img src={Add.img}/>
                <h1>{Add.name}</h1>
                <h4>{Add.price}</h4>
                <p>{Add.description}</p>
                <p>{Add.preparationTime}</p>
              </div>
         </div>
    
  )
}
