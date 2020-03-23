const assert = require('assert');
const MagicSquare = require('../src/index');


describe('MagicSquare', function() {
    it('[[4, 9, 2], [3, 5, 7], [8, 1, 5,]] should return 1', function() {
        const s =  [[4, 9, 2], [3, 5, 7], [8, 1, 5,]];
        const result = MagicSquare(s);
        assert.equal(result, 1)
    });

    it('[[4, 8, 2], [4, 5, 7], [6, 1, 6,]] should return 4', function() {
        const s =  [[4, 8, 2], [4, 5, 7], [6, 1, 6,]];
        //total = 30, 36, 4, 14, 26, 32, 14, 24
        const result = MagicSquare(s);
        assert.equal(result, 4)
    });

    it('[[2, 2, 7], [8, 6, 4], [1, 2, 9,]] should return 16', function() {
        const s =  [[2, 2, 7], [8, 6, 4], [1, 2, 9,]];
        const result = MagicSquare(s);
        assert.equal(result, 16)
    });

    it('[[1, 3, 8], [6, 4, 1], [2, 6, 5,] should return 9', function() {
        const s =  [[1, 3, 8], [6, 4, 1], [2, 6, 5,]];
        const result = MagicSquare(s);
        assert.equal(result, 9)
    });

    it('[[4, 9, 2], [3, 5, 7], [8, 1, 6,]] should return 0', function() {
        const s =  [[4, 9, 2], [3, 5, 7], [8, 1, 6,]];
        const result = MagicSquare(s);
        assert.equal(result, 0)
    });
});

