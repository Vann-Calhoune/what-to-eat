import React, { useState } from "react"
import Axios from "axios";

function FoodList({setFoodArray , foodArray}) {

    const [newName, setNewName] = useState('');
    
    const updateFoodName = (id) => {
        Axios.put("http://localhost:3001/update", { name: newName, id: id }).then((response) => {
            setFoodArray(foodArray.map((val) => {
                return val.id === id ? {id: val.id, name: val.newName, type: val.type, location: val.location, recommendation: val.recommendation, price: val.price, rating: val.rating, comments: val.comments} : val;
        }));
        }
     )
    }

    const deleteFood = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
           setFoodArray(foodArray.filter((val) => {
            return val.id !== id
           })) 
        })
        .catch((error) => {
            console.error(error)
        });
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
                <button onClick={() => {updateFoodName(val.id);}}>Update</button>
                <button onClick={() => {
                    deleteFood(val.id)
                }}>Delete</button></div>
            </div>
        })}
    </div>
  )
}

export default FoodList