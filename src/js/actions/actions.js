export const REQUEST_NUTRIENTS = 'REQUEST_NUTRIENTS';
export const RECEIEVE_NUTRIENTS = 'RECEIVE_NUTRIENTS';

function requestNutrients(text) {
    return {
        type : REQUEST_NUTRIENTS,
        text
    }
}

function receiveNutrients(text, json ) {
    return {
        type : REQUEST_NUTRIENTS,
        text,
        food : {
            name: json.foods[0].food_name,
            kcal: json.foods[0].nf_calories
        }
    }
}