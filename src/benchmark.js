import { findDuplicates, findDuplicatesSlow } from './duplicate-check.js';

const values = Array.from({ length: 20000 }, (_, index) => (index * 17) % 5000);

console.time('slow');
const slowResult = findDuplicatesSlow(values);
console.timeEnd('slow');

console.time('fast');
const fastResult = findDuplicates(values);
console.timeEnd('fast');

console.log('same output:', JSON.stringify(slowResult) === JSON.stringify(fastResult));
console.log('duplicates:', fastResult.length);
