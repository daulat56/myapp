import React, {useState} from 'react'
import "./style.css";
import Menu from './menu';
import RestaurantData from './RestaurantData';

function Restaurant() {
    const [chartData,setchartData]=useState(Menu);
  return (
    <>
      <RestaurantData chartData={chartData}/>
    </>
  )
}

export default Restaurant
