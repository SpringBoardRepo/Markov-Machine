const { MarkovMachine } = require('./markov')

let mm;
beforeEach(function () {
    mm = new MarkovMachine("the cat in the hat");
})

describe('should return', function () {
    test('should return object', function () {
        expect(mm).toEqual(expect.any(Object));
    })

    test('should return string', function () {
        expect(mm.makeText()).toEqual(expect.any(String));
    })

    test('should not be null', function () {
        expect(mm.makeText()).not.toBe(null);
    })

    test('should check the length of a string', function () {
        expect(mm.makeText().length).toBeLessThanOrEqual(50);
    })
})
