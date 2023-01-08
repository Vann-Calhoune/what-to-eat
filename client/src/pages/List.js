import React, { useState } from 'react'
import styled from 'styled-components'
import SearchFood from '../components/SearchFood'
import SearchFoodList from '../components/SearchFoodList';

const SearchMenu = styled.div`
text-align: center;
padding: 10px;
background-color: #FDF5DF;
`


function List() {

  const [searchResults, setSearchResults] = useState([]);


  return (
    <SearchMenu>
      <h1>Search Your Restaurants</h1>
      <SearchFood searchResults={searchResults} setSearchResults={setSearchResults} />
      <SearchFoodList searchResults={searchResults} setSearchResults={setSearchResults}/>
      
    </SearchMenu>
  )
}

export default List