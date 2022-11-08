const counter = require("./counter");
const reversed = require('./counter');

test('len is', () => {
  expect(counter("Hello")).toBe(5);
});

it('The string out of bound', () => {
  expect(counter('Heloo worlestation')).toThrow()
})

it('String reversed', ()=> {
  expect(reversed('Hello')).toBe('olleH')
})
