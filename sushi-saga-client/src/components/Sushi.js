import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {sushi: {id, name, img_url, price, isEaten}, eatSushi} = props
  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(id, price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          isEaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi