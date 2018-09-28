import { factorial } from './sample'

describe('Factorial testing', () => {
    it('debería ser 120 el factorial de 5', () => {
        expect(factorial(5)).toEqual(120)
    })
    it('debería ser 1 el factorial de 1', () => {
        expect(factorial(1)).toEqual(1)
    })
    it('debería ser undefined el factorial de 0', () => {
        expect(factorial(0)).toBeUndefined
    })
    it('debería ser undefined el factorial de numeros negativos', () => {
        expect(factorial(-3)).toBeUndefined
    })
})
