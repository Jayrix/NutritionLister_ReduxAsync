import React from 'react';
import FoodInfo from './FoodInfo.jsx';


let FoodsList = (props) => {
    //console.log("propsy FoodList to:", props.foodsPropertiesArray.map(food => food));

    return (
        <article>
            <p>You searched for: </p>
            <ul>
                {props.foodsArray.map((food, index) => <FoodInfo key={index} searchString={food.searchString} foodType={food.foodType} energy={food.energy}/>)}
            </ul>
        </article>

    )
}




export default FoodsList;