import * as actions from './index';

import React from 'react';

describe('action tests', () => {
    
    it('should set the current orders', () => {
        const orders =[
            {
                name: 'BillyBob',
                ingredients: ['salsa', 'pico', 'potato']
            },
            {
                name: 'timmy',
                ingredients: ['titos', 'tequila', 'yum']
            }
        ]
        
        const expected = {
            type: 'SET_ORDERS',
            orders
        }

        const result = actions.setOrders(orders);
        expect(result).toEqual(expected);
    })

    it('should send the new order', () => {
        const order =
            {
                name: 'BillyBob',
                ingredients: ['salsa', 'pico', 'potato']
            }

        const expected = {
            type: 'SEND_ORDER',
            order
        }

        const result = actions.sendNewOrder(order);
        expect(result).toEqual(expected)

    })
})
