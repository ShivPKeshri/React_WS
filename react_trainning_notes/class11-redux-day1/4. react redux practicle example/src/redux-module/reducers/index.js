import { combineReducers } from 'redux';
import { productReducer } from './product-reducer';

const rootReducer = combineReducers({
    allProducts: productReducer,  
})

export default rootReducer;