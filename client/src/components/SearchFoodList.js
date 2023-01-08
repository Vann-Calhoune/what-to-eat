import React from 'react'
import styled from 'styled-components'

const ListDiv = styled.div`

`
const ListFormat = styled.div`

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
                        <p>Rating: {val.rating}</p>
                        <p>Comments: {val.comments}</p>
            </ListFormat>
        })}
    </ListDiv>
  )
}

export default SearchFoodList