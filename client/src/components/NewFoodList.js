import React, { useEffect, useState } from "react"
import Axios from "axios";
import styled from "styled-components";

const ListFormat = styled.div`
border: 1px solid black;
margin: 10px;
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 10px;
`

const TopDiv = styled.div`
display: flex;
justify-content: space-between;
`

// const updateFoodName = (id) => {
//   Axios.put("http://localhost:3001/newupdate", { name: newName, id: id }).then((response) => {
//       setFoodArray(foodArray.map((val) => {
//           return val.id === id ? {id: val.id, name: val.newName, type: val.type, location: val.location, recommendation: val.recommendation, price: val.price, rating: val.rating, comments: val.comments} : val;
//   }));
//   }
// )
// }



function NewFoodList({setNewFoodArray , newFoodArray}) {

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/newdelete/${id}`).then(() => {
       setNewFoodArray(newFoodArray.filter((val) => {
        return val.id !== id
       })) 
    })
    .catch((error) => {
        console.error(error)
    });
  }
  
  
  const getFood = () => {
    Axios.get('http://localhost:3001/newfood').then((response) => {
    setNewFoodArray(response.data);
  });
  }
  
  useEffect(() => {
    getFood();
  }, [newFoodArray]);

  return (
    <div>
        {newFoodArray.map((val) => {
            return <ListFormat key={val.id}> 
                        <TopDiv key={val.id}>
                            <h3>Name: {val.name}</h3>
                            <button onClick={() => {
                                deleteFood(val.id)
                            }}>Delete</button>
                        </TopDiv>
                        <p>Type: {val.type}</p>
                        <p>Location: {val.location}</p>
                        <p>Price: {val.price}</p>
                        <p>Comments: {val.comments}</p>
                        {/* <div>
                            <input onChange={(e) => setNewName(e.target.value)} type='text'/>
                            <button onClick={() => {updateFoodName(val.id);}}>Update</button>
                        </div> */}
            </ListFormat>
        })}
    </div>
  )
}

export default NewFoodList