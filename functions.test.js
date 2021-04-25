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
        expect (functions.suma('bici','senda')).toBe('bicisenda');
    });

    test('given null and 2 as arguments, returns 2', () => {
        expect (functions.suma(null,2)).toBe(2);
    });
});

describe ("resta should take two numbers as arguments and return the subtraction of them", () => {

    test('given 6 and 1 as argumentes, returns 5', () => {
        expect (functions.resta(6,1)).toBe(5);
    });

    test('given -1 and 3 as arguments, returns -4', () => {
        expect (functions.resta(-1,3)).toBe(-4);
    });

});

describe ("multiplicacion should take two numbers as arguments and return the product of them", () => {

    test('given 6 and 3 as argumentes, returns 18', () => {
        expect (functions.multiplicacion(6,3)).toBe(18);
    });

    test('given 6 and 0 as argumentes, returns 0', () => {
        expect (functions.multiplicacion(6,0)).toBe(0);
    });

   /* test('given 6 and undefined as argumentes, returns 5', () => {
        expect (functions.multiplicacion(6,undefined)).toBe(null);
    }); */
});


