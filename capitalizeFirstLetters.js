const capitalizeFirstLetters = (str) => {
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++ ) {
      words[i] = words[i].replace(words[i].charAt(0),  words[i].charAt(0).toUpperCase());
   }
   return words.join(' ');
 
};

const assert = require('assert');
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters('i am learning TDD'),
  'I Am Learning TDD'
);
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
assert.strictEqual(capitalizeFirstLetters(''), '');