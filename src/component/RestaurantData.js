import React from 'react'
import "./style.css";

const RestaurantData=({chartData}) => {

  return (
    <>
      <section className='main-card--cointainer'>

          { 

          chartData.map((curElem)=>{
            return(
                <>  
                    <div className="card-container" key={curElem} >
                    <div className="card">
                        <div className="card-body">
                        <span className="card-number card-circle subtle">{curElem.id}</span>
                        <span className="card-author subtle">{curElem.address} </span>
                        <h3 className='card-title'>{curElem.name}</h3>
                        <span className="card-description subtle ">{curElem.description}</span>
                        <div className="card-read">read</div>
                    </div>
                    </div>
                    </div>
            
            
            </>
            
            )

          })
          
          
            }
    </section>
    </>
    
  )
}

export default RestaurantData
