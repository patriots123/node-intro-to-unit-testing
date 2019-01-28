
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function() {
    it('should return fizz-buzz for multiples of 15', function() {
        const fizzBuzz = 'fizz-buzz';
        const normalCases = [15,30,45]

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(fizzBuzz);
        });
    });

    it('should return buzz for multiples of 5', function() {
        const buzz = 'buzz';
        const normalCases = [5,10,20]

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(buzz);
        });
    });

    it('should return fizz for multiples of 3', function() {
        const fizz = 'fizz';
        const normalCases = [3,6,9]

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(fizz);
        });
    });

    it('should return error for not being a number', function() {
        const badInputs = ['a','!'];

        badInputs.forEach(function(input) {
            expect(function() {
              adder(input);
            }).to.throw(Error);
        });
    });
});