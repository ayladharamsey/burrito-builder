import { newOrder } from './newOrder';
import { orders } from './orders'

describe('newOrder', () => {
    it('should return an initial state', () => {
        const expected = {};
        const result = newOrder(undefined, {});
        expect(result).toEqual(expected)
    })

    it('should return an order when the type is SEND_ORDER', () => {
        const order = {
            name: 'Matilde',
            ingredients: ['llamas', 'pigeons']
        }

        const mockAction = {
            type: 'SEND_ORDER',
            order
        }
        
        const result = newOrder([], mockAction)
        expect(result).toEqual(order)
    })
})

describe('orders', () => {
    it('should return an initial state', () => {
        const expected = [];
        const result = orders(undefined, {});
        expect(result).toEqual(expected)
    })

    it('should return an order when the type is SET_ORDER', () => {
        const mockOrders = [
        {
            name: 'harry',
            ingredients: ['lemon', 'garlic']
        },{
            name: 'abdul',
            ingredients: ['turkey', 'cheese']
        }
    ]

        const mockAction = {
            type: 'SET_ORDER',
            mockOrders
        }
        
        const result = orders(mockOrders, mockAction)
        expect(result).toEqual(mockOrders)
    })
})