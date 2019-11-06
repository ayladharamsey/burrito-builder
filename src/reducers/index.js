import { combineReducers } from 'redux';
import { orders } from './orders';
import { newOrder } from './newOrder';
import { deleteOrder } from './delete';

const rootReducer = combineReducers({
  orders,
  newOrder,
  deleteOrder
});

export default rootReducer;
