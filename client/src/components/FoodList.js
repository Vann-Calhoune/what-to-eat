import React, { useEffect, useState } from "react"
import Axios from "axios";
import styled from "styled-components";
import exit from '../assets/delete.png'

const ListDiv = styled.div`

`

const ListFormat = styled.div`
border: 1px solid black;
margin: 10px;
display: flex;
flex-direction: column;
padding: 15px;
border-radius: 10px;
background-color: white;
width: 300px;
height: 275px;
gap: 10px;

`
const TopDiv = styled.div`
display: flex;
justify-content: space-between;
> img {
    height: 30px;
}
`

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

    useEffect(() => {
        getFood();
      }, [foodArray]);

  return (
    <ListDiv>
        {foodArray.map((val) => {
            return <ListFormat key={val.id}> 
                        <TopDiv key={val.id}>
                            <h3>Name: {val.name}</h3>
                            <img src={exit} alt='delete button' onClick={() => {
                                deleteFood(val.id)
                            }} />
                        </TopDiv>
                        <p>Type: {val.type}</p>
                        <p>Location: {val.location}</p>
                        <p>Recommendation: {val.recommendation}</p>
                        <p>Price: {val.price}</p>
                        <p>Rating: {val.rating}</p>
                        <p>Comments: {val.comments}</p>
                        <div>
                            <input onChange={(e) => setNewName(e.target.value)} type='text'/>
                            <button onClick={() => {updateFoodName(val.id);}}>Update</button>
                        </div>
            </ListFormat>
        })}
    </ListDiv>
  )
}

export default FoodList