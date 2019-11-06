import { Orders, mapDispatchToProps, mapStateToProps } from './Orders';
import { shallow } from 'enzyme';
import React from 'react';
import { setOrders } from '../../actions/index';

describe('Orders', () => {
    let wrapper;
    const mockOrders = [{
        name: 'Ayla',
        ingredients:['pineapple', 'cucumber', 'mayo']
    },{
      name: 'tina',
      ingredients:['poodles', 'cattle', 'mayo']
  }]

    beforeEach(() => {
        wrapper = shallow(<Orders orders={mockOrders}/>)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})

describe('MapDispatchToProps', () => {
    let mockDispatchedAction;
    
    beforeEach(() => {
      mockDispatchedAction = jest.fn();
    })

    it('should call call setOrders action with dispatch', () => {
      const mockOrders = [{
          name: 'Ayla',
          ingredients:['pineapple', 'cucumber', 'mayo']
      },{
        name: 'tina',
        ingredients:['poodles', 'cattle', 'mayo']
    }
    
    ]
      const mockAction = setOrders(mockOrders);
      const props = mapDispatchToProps(mockDispatchedAction);
  
      props.setOrders(mockOrders);
  
      expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    });
});

describe('MapStateToProps', () => {
    it('should return orders', () => {
      let orders;
      let mockState = {
        orders
      }
  
      let expected = {
        orders
      }

      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected)
    })
})