import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getArrayWithNegativeIndexes } from './index.js';

describe('getArrayWithNegativeIndexes', () => {
  it('should work with 0 index', () => {
    assert(getArrayWithNegativeIndexes([1, 2, 3])[0] === 1);
  });
  it('should work with positive indexes in range', () => {
    assert(getArrayWithNegativeIndexes([1, 2, 3])[1] === 2);
  });
  it('should work with positive indexes out of range', () => {
    assert(getArrayWithNegativeIndexes([1, 2, 3])[10] === undefined);
  });

  it('should work with negative indexes in range', () => {
    assert(getArrayWithNegativeIndexes([1, 2, 3])[-1] === 3);
  });

  it('should work with negative indexes at the end of range', () => {
    assert(getArrayWithNegativeIndexes([1, 2, 3])[-3] === 1);
  });

  it('should work with negative indexes out of range', () => {
    assert(getArrayWithNegativeIndexes([1, 2, 3])[-6] === undefined);
  });

  it('should work with negative indexes out of range with snake teleport', () => {
    assert(
      getArrayWithNegativeIndexes([1, 2, 3], { enableSnakeTeleport: true })[
        -6
      ] === 1
    );
    assert(
      getArrayWithNegativeIndexes([1, 2, 3], { enableSnakeTeleport: true })[
        -100
      ] === 3
    );
  });

  it('should return `undefined` with non-integer indexes', () => {
    assert(getArrayWithNegativeIndexes([1, 2, 3])['1.5'] === undefined);
    assert(getArrayWithNegativeIndexes([1, 2, 3])[1.5] === undefined);
    assert(getArrayWithNegativeIndexes([1, 2, 3])['foo'] === undefined);
  });

  it('should work with positive indexes in range with snake teleport', () => {
    assert(
      getArrayWithNegativeIndexes([1, 2, 3], {
        enableSnakeTeleport: true,
      })[2] === 3
    );
  });
  it('should work with positive indexes out of range with snake teleport', () => {
    assert(
      getArrayWithNegativeIndexes([1, 2, 3], {
        enableSnakeTeleport: true,
      })[20] === 3
    );
  });
});
