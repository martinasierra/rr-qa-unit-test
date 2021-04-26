import * as functions from "./functions";

describe("texto should take any argument and returns it", () => {

    test('given getting started as argument, returns getting started', () => {
        expect(functions.texto('Getting started')).toBe('Getting started');
    });

    test('given 1234 as argument, returns 1234', () => {
        expect(functions.texto(1234)).toBe(1234);
    });

    test('given undefined as argument, returns undefined', () => {
        expect(functions.texto(undefined)).toBeUndefined;
    });

    test('given null as argument, returns null', () => {
        expect(functions.texto()).toBeNull;
    });

    test('given an empty string as argument, returns it', () => {
        expect(functions.texto('')).toBe('');
    });

});

describe("suma should take two numbers as arguments and return the sum of them", () => {
    
    test('given 4 and 4 as arguments, returns 8', () => {
        expect(functions.suma(4,4)).toBe(8);
    });

    test('given 1.5 and 0.5 as arguments, returns 2', () => {
        expect(functions.suma(1.5,0.5)).toBe(2);
    });

    test('given bici and senda as arguments, returns bicisenda', () => {
        expect(functions.suma('bici','senda')).toBe('bicisenda');
    });

    test('given null and 2 as arguments, returns 2', () => {
        expect(functions.suma(null,2)).toBe(2);
    });

    test('given 6 and undefined as arguments, returns undefined', () => {
        expect(functions.suma(6,undefined)).toBeUndefined;
    });
});

describe("resta should take two numbers as arguments and return the subtraction of them", () => {

    test('given 6 and 1 as arguments, returns 5', () => {
        expect (functions.resta(6,1)).toBe(5);
    });

    test('given -1 and 3 as arguments, returns -4', () => {
        expect(functions.resta(-1,3)).toBe(-4);
    });

    test('given 6 and null as arguments, returns 6', () => {
        expect(functions.resta(6,null)).toBe(6);
    });

    test('given 6 and undefined as arguments, returns undefined', () => {
        expect(functions.resta(6,undefined)).toBeUndefined;
    });
});

describe("multiplicacion should take two numbers as arguments and return the product of them", () => {

    test('given 6 and 3 as arguments, returns 18', () => {
        expect(functions.multiplicacion(6,3)).toBe(18);
    });

    test('given 6 and 0 as arguments, returns 0', () => {
        expect(functions.multiplicacion(6,0)).toBe(0);
    });

    test('given 6 and null as arguments, returns 6', () => {
        expect(functions.multiplicacion(6,null)).toBe(0);
    });

    test('given 6 and undefined as argumentes, returns undefined', () => {
        expect (functions.multiplicacion(6,undefined)).toBeUndefined;
    });
});

describe("division should take two numbers as arguments and return the product of them", () => {

    test('given 6 and 3 as arguments, returns 2', () => {
        expect(functions.division(6,3)).toBe(2);
    });

    test('given 6 and 0 as arguments, returns the string No se puede dividir por 0', () => {
        expect(functions.division(6,0)).toMatch('No se puede dividir por 0');
    });

    test('given 7 and 2 as arguments, returns 3.5', () => {
        expect(functions.division(7,2)).toBe(3.5);
    });
});

describe("tablaMultiplicacion should take two numbers and return an array of numbers with multiples of the first argument up to the second argument", () => {

    test('given 3 and 8 as arguments, returns 0,3,6,9,12,15,18,21,24', () => {
        expect(functions.tablaMultiplicar(3,8)).toContain(0,3,6,9,12,15,18,21,24);
    });    

    test('given 3 and 9 as arguments, returns 0,3,6,9,12,15,18,21,24,27,30', () => {
        expect(functions.tablaMultiplicar(3,)).toContain(0,3,6,9,12,15,18,21,24,27,30);
    });
});

describe("potencia should take two numbers as arguments and return the first number raised to the power of the second number", () => {

    test('given 5 and 3 as arguments, returns 125', () => {
        expect(functions.potencia(5,3)).toBe(125);
    });

    test('given 5 and 0 as arguments, returns 1', () => {
        expect(functions.potencia(5,0)).toBe(1);
    });
});

describe("anidada should take two numbers as arguments and return the sum of its squares", () => {
    
    test('given 2 and 3 as arguments, returns 13', () => {
        expect(functions.anidada(2,3)).toBe(13);
    });

    test('given null and null as arguments, returns null', () => {
        expect(functions.anidada(null,null)).toBeNull;
    });
});

describe("cerosIzq should take two numbers as arguments and return a string made up of the first argument entered and to the left the number of zeros necessary for the length of the string to be the second argument", () => {
    
    test("given 4 and 2 as arguments, returns 0004", () => {
        expect(functions.cerosIzq(4,4)).toEqual('0004');
    });

    test("given 4 and 0 as arguments, returns 4", () => {
        expect(functions.cerosIzq(4,0)).toEqual('4');
    });

    test("given four and 6 as arguments, returns 00four", () => {
        expect(functions.cerosIzq('four',6)).toEqual('00four');
    });

});
// npm run test-coverage