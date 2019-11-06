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

    it('should update state when handleNameChange is called', () => {
        const mockEvent = {
            target: {name: 'name', value: 'Billy' }
        }
        expect(wrapper.state('name')).toEqual('');
        wrapper.instance().handleNameChange(mockEvent);
        expect(wrapper.state('name')).toEqual('Billy')
    })

    it.skip('should update state when handleIngredientChange is called', () => {
        const mockDefaultState = {name: '', ingredients: []}
        const mockCurrentState = {name: 'mayonase'};
        const mockEvent = { preventDefault: jest.fn()}

        wrapper.instance().handleIngredientChange(mockEvent);
        wrapper.instance().setState(mockDefaultState);
        expect(wrapper.instance().state).toEqual(mockCurrentState)
    })

    it.skip('should call handleSubmit upon click', () => {
        wrapper.instance().submitOrder = jest.fn();
        const mockevent = { preventDefault: jest.fn()}
        const mockOrder = {
            name: 'Delilah',
            ingredients: ['children', 'goats']
        }
        wrapper.instance().clearInputs = jest.fn()
        wrapper.instance().handleSubmit(mockevent)
        expect(wrapper.instance().submitOrder).toHaveBeenCalledWith(mockOrder)
        expect(wrapper.instance().clearInputs).toHaveBeenCalled()

    })

    it('should clear state when clear inputs is called', () => {
        const mockCurrentState = {name: 'Ayla', ingredients: ['lettuce', 'potato']};
        const mockDefaultState = {name: '', ingredients: []}
        wrapper.instance().setState(mockCurrentState);
        wrapper.instance().clearInputs();
        expect(wrapper.state()).toEqual(mockDefaultState)
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