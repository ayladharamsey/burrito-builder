import { OrderForm, mapDispatchToProps } from './OrderForm';
import { shallow } from 'enzyme';
import React from 'react';
import { sendNewOrder } from '../../actions/index'

describe('OrderForm', () => {
    let wrapper; 
    
    beforeEach(() => {
        wrapper = shallow(<OrderForm />)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
});

describe('MapDispatchToProps', () => {
    let mockDispatchedAction;
    
    beforeEach(() => {
      mockDispatchedAction = jest.fn();
    })

    it('should call call sendNewOrder action with dispatch', () => {
      const mockOrder = {
          name: 'Ayla',
          ingredients:['pineapple', 'cucumber', 'mayo']
      }
      const mockAction = sendNewOrder(mockOrder);
      const props = mapDispatchToProps(mockDispatchedAction);
  
      props.sendNewOrder(mockOrder);
  
      expect(mockDispatchedAction).toHaveBeenCalledWith(mockAction);
    });

    });