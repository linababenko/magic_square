'use strict';

/**
 * @return {number}
 */
function MagicSquare(s) {
    let PossibleCombinations = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]], //a
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]], //b
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]], //c
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]], //d
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]], //e
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]], //r
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]], //g
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]], //z
    ];

    let totals = [];
    
    for (let i = 0; i < 8; i += 1) {
        let total = 0;
        let currentRow = PossibleCombinations[i];
        
        for (let j = 0; j < 3; j += 1) {
            
            for (let k = 0; k < 3; k += 1) {
                if (s[j][k] !== currentRow[j][k]) {
                    total += Math.max(s[j][k], currentRow[j][k]) - Math.min(s[j][k], currentRow[j][k]);
                }
            }
        }
        totals.push(total);
    }
    return Math.min(...totals);
}

module.exports = MagicSquare;
