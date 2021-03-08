import { DynamicArray } from './DynamicArray.js';

describe('Initialize Dynamic Array without a capacity', () => {
  const arr = new DynamicArray();

  test('Check capacity', () => {
    expect(arr.getCapacity()).toEqual(1);
  });
  test('Check size (endIndex)', () => {
    expect(arr.getSize()).toEqual(0);
  });
  test('Check elements', () => {
    expect(arr.print()).toEqual('[]');
  });
});

describe('Initialize Dynamic Array with a capacity of 4', () => {
  const arr = new DynamicArray(4);

  test('Check capacity', () => {
    expect(arr.getCapacity()).toEqual(4);
  });
  test('Check size (endIndex)', () => {
    expect(arr.getSize()).toEqual(0);
  });
  test('Check elements', () => {
    expect(arr.print()).toEqual('[]');
  });
});

describe('Test adding elements', () => {
  const arr = new DynamicArray(4);
  arr.add(1);
  arr.add(2);
  arr.add(4);
  arr.add(3, 2);
  arr.add(5);

  test('5 elements added', () => {
    expect(arr.print()).toEqual('[1, 2, 3, 4, 5]');
  });
  test('Check capacity', () => {
    expect(arr.getCapacity()).toEqual(8);
  });
  test('Check size (endIndex)', () => {
    expect(arr.getSize()).toEqual(5);
  });
});

describe('Test popping an element', () => {
  const arr = new DynamicArray();
  arr.add(1);
  arr.add(2);
  arr.add(4);
  arr.pop();

  test('2 elements added', () => {
    expect(arr.print()).toEqual('[1, 2]');
  });
  test('Check capacity', () => {
    expect(arr.getCapacity()).toEqual(4);
  });
  test('Check size (endIndex)', () => {
    expect(arr.getSize()).toEqual(2);
  });
});

describe('Test removing an element', () => {
  const arr = new DynamicArray();
  arr.add(1);
  arr.add(4);
  arr.add(2);
  arr.add(3);
  arr.removeAt(1);

  test('2 elements added', () => {
    expect(arr.print()).toEqual('[1, 2, 3]');
  });
  test('Check capacity', () => {
    expect(arr.getCapacity()).toEqual(4);
  });
  test('Check size (endIndex)', () => {
    expect(arr.getSize()).toEqual(3);
  });
});

describe('Test halving the array', () => {
  const arr = new DynamicArray();

  test('2 elements added', () => {
    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(5);
    expect(arr.print()).toEqual('[1, 2, 3, 4, 5]');
  });
  test('Check capacity', () => {
    arr.pop();
    expect(arr.print()).toEqual('[1, 2, 3, 4]');
  });
  test('Check capacity', () => {
    expect(arr.getCapacity()).toEqual(8);
  });
  test('Check size (endIndex)', () => {
    expect(arr.getSize()).toEqual(4);
  });
  test('Check if array capacity gets halved after poping last element', () => {
    arr.pop();
    expect(arr.getCapacity()).toEqual(4);
  });
});
