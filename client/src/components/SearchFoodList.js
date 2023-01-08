import React from 'react'
import styled from 'styled-components'

const ListDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
gap: 10px;
justify-content: center;
`

function SearchFoodList({ searchResults, setSearchResults }) {


  return (
    <ListDiv>
        {searchResults.map((val) => {
            return <ListFormat key={val.id}> 
                        <h3>Name: {val.name}</h3>
                        <p>Type: {val.type}</p>
                        <p>Location: {val.location}</p>
                        <p>Recommendation: {val.recommendation}</p>
                        <p>Price: {val.price}</p>
                        <p>Rating: {val.rating >= 1 ? val.rating : '(Have not ate here yet)'}</p>
                        <p>Comments: {val.comments}</p>
            </ListFormat>
        })}
    </ListDiv>
  )
}

export default SearchFoodList