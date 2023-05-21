// buttons of a phone
const numpadLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

const validInputs = ['2','3','4','5','6','7','8','9'];

function possibleWords(digits) {
    // empty input
    if (digits.length === 0) {
      return [];
    }

    // check if valud input
    for(let i = 0; i < digits.length; i++){
        if(digits.length > 4){
            return "Invalid input! The maximum length of the input can only be 4";
        }
        if(!validInputs.includes(digits[i])){
            return "Invalid input! Please give an input only made of digits in the range ['2','9']";
        }
        
    }

    
    /*
      //Iterative version

      const result = letterCombinations(digits)
    */
    
    // Recursive version
    const result = [];
    letterCombinationsRecursive(digits, 0, '', result);

    bubbleSort(result);
    return result;
  };

  // Recursive

  function letterCombinationsRecursive(digits, index, current, result) {
    // all digits have been processed
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = numpadLetters[digits[index]];

    for (let i = 0; i < letters.length; i++) {
      letterCombinationsRecursive(digits, index + 1, current + letters[i], result);
    }
  };

  // Iterative

  function letterCombinations(digits){
    const result = [];
    result.push('');

    for(let i = 0; i < digits.length; i++){
        const letters = numpadLetters[digits[i]];

        while(result[0].length != i+1){

            const curr = result.shift();
            for(let j = 0; j < letters.length; j++){
                result.push(curr + letters[j]);
            }
        }

    }
    return result;
  }

  // Bubble sort

  function swap(array, i, j){
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }

  function bubbleSort(array){
    size = array.length;
    for(let i = 0; i < size-1; i++){
      let swapped = false;
      for (let j = 0; j < size - 1 - i; j++){
        if(array[j] > array[j + 1]){
          swap(array,j,j+1);
          swapped = true;
        }
      }
      if(!swapped){
        break;
      }
    }
  }
  
  console.log(possibleWords("23"));  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
  console.log(possibleWords(""));    // Output: []
  console.log(possibleWords("2"));   // Output: ["a","b","c"]
  
  console.dir(possibleWords("9999"), {'maxArrayLength':null});



// Unit tests: 
  
const assert = require('assert');

const tests = [
  { input: '1', expected: "Invalid input! Please give an input only made of digits in the range ['2','9']" },
  { input: '33333', expected: "Invalid input! The maximum length of the input can only be 4" },
  { input: '23', expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] },
  { input: '2345', expected: [
    'adgj', 'adgk', 'adgl', 'adhj', 'adhk', 'adhl',
    'adij', 'adik', 'adil', 'aegj', 'aegk', 'aegl',
    'aehj', 'aehk', 'aehl', 'aeij', 'aeik', 'aeil',
    'afgj', 'afgk', 'afgl', 'afhj', 'afhk', 'afhl',
    'afij', 'afik', 'afil', 'bdgj', 'bdgk', 'bdgl',
    'bdhj', 'bdhk', 'bdhl', 'bdij', 'bdik', 'bdil',
    'begj', 'begk', 'begl', 'behj', 'behk', 'behl',
    'beij', 'beik', 'beil', 'bfgj', 'bfgk', 'bfgl',
    'bfhj', 'bfhk', 'bfhl', 'bfij', 'bfik', 'bfil',
    'cdgj', 'cdgk', 'cdgl', 'cdhj', 'cdhk', 'cdhl',
    'cdij', 'cdik', 'cdil', 'cegj', 'cegk', 'cegl',
    'cehj', 'cehk', 'cehl', 'ceij', 'ceik', 'ceil',
    'cfgj', 'cfgk', 'cfgl', 'cfhj', 'cfhk', 'cfhl',
    'cfij', 'cfik', 'cfil'
  ] },
  { input: '', expected: [] },
  { input: '2', expected: ['a', 'b', 'c'] },
  { input: '45', expected: ['gj', 'gk', 'gl', 'hj', 'hk', 'hl', 'ij', 'ik', 'il'] },
  { input: '79', expected: ['pw', 'px', 'py', 'pz', 'qw', 'qx', 'qy', 'qz', 'rw', 'rx', 'ry', 'rz', 'sw', 'sx', 'sy', 'sz'] },
  { input: '256', expected: [
    'ajm', 'ajn', 'ajo', 'akm', 'akn', 'ako', 'alm', 
    'aln', 'alo', 'bjm', 'bjn', 'bjo', 'bkm', 'bkn', 
    'bko', 'blm', 'bln', 'blo', 'cjm', 'cjn', 'cjo', 
    'ckm', 'ckn', 'cko', 'clm', 'cln', 'clo'
] },
];


tests.forEach(({ input, expected }) => {
  const result = possibleWords(input);
  assert.deepStrictEqual(result, expected);
});


// If the tests passed
console.log('All tests passed!');
  