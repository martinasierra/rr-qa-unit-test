import * as functions from "./functions";

describe ("texto should take any argument and returns it", () => {

    test('given getting started as argument, returns getting started', () => {
        expect (functions.texto('Getting started')).toBe('Getting started');
    });

    test('given 1234 as argument, returns 1234', () => {
        expect (functions.texto(1234)).toBe(1234);
    });

    test('given undefined as argument, returns undefined', () => {
        expect (functions.texto(undefined)).toBeUndefined(undefined);
    });

    test('given an empty string as argument, returns it', () => {
        expect (functions.texto('')).toBe('');
    });

});

describe ("suma should take two numbers as arguments and return the sum of them", () => {
    
    test('given 4 and 4 as arguments, returns 8', () => {
        expect (functions.suma(4,4)).toBe(8);
    });

    test('given 1.5 and 0.5 as arguments, returns 2', () => {
        expect (functions.suma(1.5,0.5)).toBe(2);
    });

    test('given bici and senda as arguments, returns bicisenda', () => {
        expect (functions.suma('hola','chau')).toBe('bicisenda');
    });

    test('add null + 2 equals 2', () => {
        expect (functions.suma(null,2)).toBe(2);
    });
});

