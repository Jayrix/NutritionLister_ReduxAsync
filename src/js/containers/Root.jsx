import {fetchNutrients} from '../actions/thunks';
import {receiveNutrients} from '../actions/actions';
import {foodInformation} from '../reducers/reducers';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(foodInformation, applyMiddleware(thunkMiddleware));

console.log(store.getState());

// store.dispatch(receiveNutrients('2 eggs',
//     {
//         foods : [{
//             food_name: 'egg',
//             nf_calories: '77'
//         }]
//     })
// );

store.dispatch(fetchNutrients('turkey'))
    .then(()=> console.log(store.getState()))