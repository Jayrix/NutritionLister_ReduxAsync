import React from 'react';

export const FoodInfo = (props) => (
    <li>
        <span>
            {props.foodName}
        </span>
        <ul>
            <li>{props.foodKcals}</li>
        </ul>
    </li>
)