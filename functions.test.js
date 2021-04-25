import * as functions from "./functions";

describe ("texto test", () => {

    test('enter a text and return it/enter getting started returns getting started', () => {
        expect (functions.texto('Getting started')).toBe('Getting started');
    });

    test('enter a number a returns it', () => {
        expect (functions.texto(123456)).toBe(123456);
    });

    test('enter undefined a returns it', () => {
        expect (functions.texto(undefined)).toBe(undefined);
    });
});

