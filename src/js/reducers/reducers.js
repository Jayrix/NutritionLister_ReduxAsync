import {
    REQUEST_NUTRIENTS,
    RECEIVE_NUTRIENTS
} from "../actions/actions";

export function foodInformation(
    state = {
        isFetching: false,
        foods: []
    },
    action) {
    switch (action.type) {
        case REQUEST_NUTRIENTS:
            return Object.assign({}, state, {isFetching: true})
        case RECEIVE_NUTRIENTS:
            return Object.assign({}, state, {isFetching: false,
                foods : [
                    ...state.foods,
                    {
                        searchString: action.text,
                        foodType: action.name,
                        energy : action.kcal
                    }
                ]})
        default:
            return state
    }
}