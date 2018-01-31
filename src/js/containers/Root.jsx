import {fetchNutrients} from '../actions/thunks';
import {receiveNutrients} from '../actions/actions';
import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux';
import {foodInformation} from '../reducers/reducers';
import Foods from './Foods';

const store = createStore(foodInformation, applyMiddleware(thunkMiddleware));

export default class Root extends Component {
    render(){
        return (
            <Provider store={store}>
                <Foods />
            </Provider>
        )
    }
}


console.log(store.getState());


//
// store.dispatch(receiveNutrients('chicken breast',
//     {
//         foods : [
//             {
//                 food_name : 'chicken breast',
//                 nf_calories : 211
//
//             }
//         ]
//     }));


setTimeout(() => {
    store.dispatch(fetchNutrients('chicken breast'))
        .then(()=> console.log('store after fetch: ', store.getState()))
}, 1000);

