import React from 'react';
import FoodInfo from './FoodInfo.jsx';


let FoodsList = (props) => (
    <ul>
        {props.foodsArray.map((food, index) => <FoodInfo key={index} foodName={props.foodName} foodKcals={props.foodKcals}/>)}
    </ul>
)