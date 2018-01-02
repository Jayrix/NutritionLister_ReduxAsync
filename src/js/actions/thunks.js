import fetch from 'cross-fetch';
import {requestNutrients, receiveNutrients} from "./actions";

const fetchHeaders = {
    "x-app-id" : "a7e1d127",
    "x-app-key" : "6929216b435bdf519563002b48e7b614",
    "x-remote-user-id": "0",
    "Content-Type": "application/json"
};

// let fetchBody = JSON.stringify({
//     "query":"2 eggs"
// });
//
// let fetchConfig = {
//     method: 'POST',
//     headers: fetchHeaders,
//     body: fetchBody
// };

function fetchConfig(text){
    return {
        method: 'POST',
        headers: fetchHeaders,
        body: JSON.stringify({
            "query": text
        })
    }
}

// fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', fetchConfig())
//     .then(result => {
//         if (result.ok){
//             return result.json();
//         }
//     })
//     .then(result => console.log(result))

export function fetchNutrients(text){
    return function (dispatch) {
        dispatch(requestNutrients(text));
        return (
            fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', fetchConfig())
            .then(result => {
                if (result.ok){
                    return result.json();
                }
            })
            .then(result => console.log(result))
        )
    }
}

fetchNutrients('chicken');