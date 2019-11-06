import { combineReducers } from 'redux';
import { orders } from './orders';
import { newOrder } from './newOrder';

const rootReducer = combineReducers({
  orders,
  newOrder
});

export default rootReducer;
