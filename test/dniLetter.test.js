import { describe, expect, it } from 'vitest'
import { DNI } from '../dniLetter.js'

describe('DNI', () => {

    it('Should return W for the number 71775872', () => {
        const dni = new DNI(71775872);
        expect(dni.calculateDNILetter()).toBe('W');
    });

    it('Should return L for the number 32888179', () => {
        const dni = new DNI(32888179);
        expect(dni.calculateDNILetter()).toBe('L');
    });

    it('Should return A for the number 11075630', () => {
        const dni = new DNI(11075630);
        expect(dni.calculateDNILetter()).toBe('A');
    });

    it('Should return R for the number 99999999', () => {
        const dni = new DNI(99999999);
        expect(dni.calculateDNILetter()).toBe('R');
    });

    it('Should return the data entered is incorrect if the input is not an integer number', () => {
        expect(() => new DNI('23A65443')).toThrow('The data entered is incorrect');
    });

    it('Should return the data entered is incorrect if the input is not in the rage between 0 and 99999999', () => {
        expect(() => new DNI('-2')).toThrow('The data entered is incorrect');
    });

    it('Should return the data entered is incorrect if the input is not in the rage between 0 and 99999999', () => {
        expect(() => new DNI('109989654')).toThrow('The data entered is incorrect');
    });

});
