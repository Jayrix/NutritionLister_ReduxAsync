import React from 'react';

const FoodInfo = (props) => {
    //console.log("propsy to:", props);

    return(
        <li>
            <span>
                "{props.searchString}"
            </span>
                <ul>
                    <li>Food type: {props.foodType}</li>
                    <li>Energy value: {props.energy}</li>
                </ul>
        </li>
    )
}



export default FoodInfo