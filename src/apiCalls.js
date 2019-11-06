export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const submitOrder = (order) => {
  const url = 'http://localhost:3001/api/v1/orders';
  const options = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
        'Content-Type': 'application/json'
    }
  }
  
  return fetch(url, options)
      .then(response => response.json())
        // .then(order => this.setState({ orders : [...this.state.orders, order ]}));
        // .catch(error => console.log(error));
}