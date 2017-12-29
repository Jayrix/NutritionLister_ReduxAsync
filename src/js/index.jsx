// import fetch from 'cross-fetch';
//
//
// let fetchHeaders = {
//     "x-app-id" : "a7e1d127",
//     "x-app-key" : "6929216b435bdf519563002b48e7b614",
//     "x-remote-user-id": "0",
//     "Content-Type": "application/json"
// };
//
// let fetchBody = JSON.stringify({
//     "query":"2 eggs"
// });
//
// let fetchConfig = {
//     method: 'POST',
//     headers: fetchHeaders,
//     body: fetchBody
// };
//
// fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', fetchConfig)
//     .then(result => {
//         if (result.ok){
//             return result.json();
//         }
//     })
//     .then(result => console.log(result))
import actions from './actions/actions';
import {foodInformation} from './reducers/reducers';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(foodInformation, applyMiddleware(thunkMiddleware));

console.log(store.getState());