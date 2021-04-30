const myCalculate = require ('./calculate');    //require ('./the file with the calculator function')

test('add 1 + 2 to equal 3', () => {
    expect(myCalculate.sum(1,2)).toBe(3);
});

test('subtract 5 - 4 to equal 1', () => {
    expect(myCalculate.subtract(5,4)).toBe(1);
});

test('multiply 3 * 2 to equal 6', () => {
    expect(myCalculate.multiply(3,2)).toBe(6);
});

test('division 10 / 2 to equal 5', () => {
    expect(myCalculate.division(10,2)).toBe(5);
});