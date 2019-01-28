
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function() {
    it('should return fizzbuzz', function() {
        const normalCases = [
            {value: 3, expected: 'fizz'},
            {value: 5, expected: 'buzz'},
            {value: 15, expected: 'fizz-buzz'}
          ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.value);
            expect(answer).to.equal(input.expected);
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