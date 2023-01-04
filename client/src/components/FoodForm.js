import { useState } from "react"



function FoodForm() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const displayInfo = (e) => {
        e.preventDefault();
        console.log(name)
    }

  return (
    <form className="entry">
        <label>Name:</label>
        <input type='text' onChange={(e) => {
            setName(e.target.value);
        }}></input>
        <label>Type:</label>
        <input type='text' onChange={(e) => {
            setType(e.target.value);
        }}></input>
        <label>Location:</label>
        <input type='text' onChange={(e) => {
            setLocation(e.target.value);
        }}></input>
        <label>Recommendation:</label>
        <input type='text' onChange={(e) => {
            setRecommendation(e.target.value);
        }}></input>
        <label>Price:</label>
        <input type='text' onChange={(e) => {
            setPrice(e.target.value);
        }}></input>
        <label>Rating(1-10):</label>
        <input type='number' onChange={(e) => {
            setRating(e.target.value);
        }}></input>
        <label>Comments:</label>
        <textarea onChange={(e) => {
            setComments(e.target.value);
        }}></textarea>
        <button onClick={displayInfo}>Submit</button>
    </form>
  )
}

export default FoodForm