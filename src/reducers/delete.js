export const deleteOrder = (state = null, action) => {
    switch (action.type) {
      case 'DELETE_ORDER':
          const found = action.orders.find(order => order.id === action.id);
          console.log(found)
          return action.orders.splice(found.id, 1)
      default:
        return state;
    }
  };