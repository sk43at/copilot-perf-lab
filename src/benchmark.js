import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';

import { findDuplicates, findDuplicatesSlow } from './duplicate-check.js';

const values = Array.from({ length: 20000 }, (_, index) => (index * 17) % 5000);
const warmupValues = Array.from({ length: 1000 }, (_, index) => (index * 17) % 250);
const sampleCount = 5;

function median(samples) {
  const sorted = [...samples].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function measure(label, findDuplicatesForValues) {
  findDuplicatesForValues(warmupValues);

  const samples = [];
  let result;

  for (let sample = 0; sample < sampleCount; sample += 1) {
    const start = performance.now();
    result = findDuplicatesForValues(values);
    samples.push(performance.now() - start);
  }

  console.log(`${label} median (${sampleCount} runs): ${median(samples).toFixed(2)} ms`);
  return result;
}

const slowResult = measure('slow', findDuplicatesSlow);
const fastResult = measure('fast', findDuplicates);

assert.deepEqual(fastResult, slowResult);
console.log('same output: true');
console.log('duplicates:', fastResult.length);
