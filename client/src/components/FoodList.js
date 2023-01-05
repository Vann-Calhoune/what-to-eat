import React, { useState } from "react"
import Axios from "axios";

function FoodList({setFoodArray , foodArray}) {

    const [newName, setNewName] = useState('');
    
    const updateFoodName = (id) => {
        Axios.put("http://localhost:3001/update", { name: newName, id: id }).then((response) => {
            alert("update");
        }
     )
    }
    

    const getFood = () => {
        Axios.get('http://localhost:3001/food').then((response) => {
        setFoodArray(response.data);
    });
    }

  return (
    <div>
        <button onClick={getFood}>FoodList</button>

        {foodArray.map((val) => {
            return <div key={val.id} className='foods'> 
                <h3>{val.name}</h3>
                <p>{val.price}</p>
                <div><input onChange={(e) => setNewName(e.target.value)} type='text'/>
                <button onClick={() => {updateFoodName(val.id);}}>Update</button></div>
            </div>
        })}
    </div>
  )
}

export default FoodList