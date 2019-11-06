export const newOrder = (state = {}, action) => {
    switch (action.type) {
      case 'SEND_ORDER':
        return action.order;
      default:
        return state;
    }
  };