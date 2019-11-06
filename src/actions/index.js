export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const sendNewOrder = order => ({
  type: 'SEND_ORDER',
  order
});

export const deleteOrderObj = (id, orders) => ({
  type: 'DELETE_ORDER',
  id,
  orders
})
