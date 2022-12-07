import { expect, test } from '@jest/globals';
import { objectKeys, objectEntries, objectValues, pick, omit } from '../src';

test('objectKeys', () => {
    expect(objectKeys(null)).toEqual([]);
    expect(objectKeys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
    expect(objectKeys([1, 2, 3])).toEqual(['0', '1', '2']);
});

test('objectEntries', () => {
    expect(objectEntries(null)).toEqual([]);
    expect(objectEntries({ a: 1, b: 2, c: 3 })).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
    ]);
    expect(objectEntries([1, 2, 3])).toEqual([
        ['0', 1],
        ['1', 2],
        ['2', 3],
    ]);
});

test('objectValues', () => {
    expect(objectValues(null)).toEqual([]);
    expect(objectValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
    expect(objectValues([1, 2, 3])).toEqual([1, 2, 3]);
});

test('pick', () => {
    expect(pick(null)).toEqual({});
    expect(pick({ a: 1, b: 2, c: 3 }, 'a', 'c')).toEqual({ a: 1, c: 3 });
    expect(pick({ a: 1, b: 2, c: 3 })).toEqual({});
});

test('omit', () => {
    expect(omit(null)).toEqual({});
    expect(omit({ a: 1, b: 2, c: 3 }, 'a', 'c')).toEqual({ b: 2 });
    expect(omit({ a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 });
});
