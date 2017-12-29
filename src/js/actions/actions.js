export const REQUEST_NUTRIENTS = 'REQUEST_NUTRIENTS';
export const RECEIEVE_NUTRIENTS = 'RECEIVE_NUTRIENTS';

export function requestNutrients(text) {
    return {
        type : REQUEST_NUTRIENTS,
        text
    }
}

export function receiveNutrients(text, json ) {
    return {
        type : REQUEST_NUTRIENTS,
        text,
        name: json.foods[0].food_name,
        kcal: json.foods[0].nf_calories
    }
}