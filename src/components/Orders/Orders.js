import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';

export class Orders extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    const { setOrders } = this.props;
    getOrders()
      .then(data => setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

   orderEls = () => {
    const { orders } = this.props;
    return orders.map(order => {
      return (
        <div className="order" key={order.id}>
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li key={ingredient}>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    })
  };
  
  render () {
    return (
      <section>
        {  this.props.orders.length ? this.orderEls() : <p>No orders yet!</p> }
      </section>
    )
  }
  
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);