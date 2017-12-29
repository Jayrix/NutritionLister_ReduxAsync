import {
    REQUEST_NUTRIENTS,
    RECEIEVE_NUTRIENTS
} from "../actions/actions";

function food(
    state = {
        isFetching: false,
        foods: []
    },
    action) {
    switch (action.type) {
        case REQUEST_NUTRIENTS:
            return Object.assign({}, state, {isFetching: true})
        case RECEIEVE_NUTRIENTS:
            return Object.assign({}, state, {foods : [
                ...state.foods,
                {
                    [action.text] : {
                        foodType: action.name,
                        energy : action.kcal
                    }
                }
                ]})
        default:
            return state
    }
}