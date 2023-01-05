import React, { useState } from 'react'
import FoodForm from '../components/FoodForm'
import FoodList from '../components/FoodList'

function Home() {

  const [foodArray, setFoodArray] = useState([]);
  
  return (
    <div>
        <FoodForm setFoodArray={setFoodArray} foodArray={foodArray}/>
        <FoodList setFoodArray={setFoodArray} foodArray={foodArray}/>
    </div>
  )
}

export default Home