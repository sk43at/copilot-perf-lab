import test from 'node:test';
import assert from 'node:assert/strict';

import { findDuplicates, findDuplicatesSlow } from '../src/duplicate-check.js';

test('findDuplicatesSlow returns repeated values in order of first duplicate occurrence', () => {
  assert.deepEqual(findDuplicatesSlow([3, 1, 2, 1, 3, 2, 4]), [1, 3, 2]);
});

test('findDuplicates uses a linear-time approach while preserving the same output', () => {
  const values = [3, 1, 2, 1, 3, 2, 4, 5, 5, 6];
  const expected = [1, 3, 2, 5];

  assert.deepEqual(findDuplicates(values), expected);
  assert.deepEqual(findDuplicatesSlow(values), expected);
});
