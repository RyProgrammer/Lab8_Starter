// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test legit phone number 1', () => {
    expect(functions.isPhoneNumber('619-000-0000')).toBe(true);
});

test('test legit phone number 2', () => {
    expect(functions.isPhoneNumber('(619)000-0000')).toBe(true);
});

test('test invalid phone number 1', () => {
    expect(functions.isPhoneNumber('000')).toBe(false);
});

test('test invalid phone number 2', () => {
    expect(functions.isPhoneNumber('000-000')).toBe(false);
});

test('test legit email 1', () => {
    expect(functions.isEmail('me@gmail.com')).toBe(true);
});

test('test legit email 2', () => {
    expect(functions.isEmail('me@ucsd.edu')).toBe(true);
});

test('test invalid email 1', () => {
    expect(functions.isEmail('megmail.com')).toBe(false);
});

test('test invalid email 2', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('test strong password 1', () => {
    expect(functions.isStrongPassword('a123')).toBe(true);
});

test('test strong password 2', () => {
    expect(functions.isStrongPassword('a12345_7890bcde')).toBe(true);
});

test('test weak password 1', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
});

test('test weak password 2', () => {
    expect(functions.isStrongPassword('abcdefghijklmnopqrs')).toBe(false);
});

test('test legit date 1', () => {
    expect(functions.isDate('1/1/2011')).toBe(true);
});

test('test legit date 2', () => {
    expect(functions.isDate('01/01/2011')).toBe(true);
});

test('test invalid date 1', () => {
    expect(functions.isDate('1/1/11')).toBe(false);
});

test('test invalid date 2', () => {
    expect(functions.isDate('001/1/2011')).toBe(false);
});

test('test legit hex color 1', () => {
    expect(functions.isHexColor('fff011')).toBe(true);
});

test('test legit hex color 2', () => {
    expect(functions.isHexColor('fff')).toBe(true);
});

test('test invalid hex color 1', () => {
    expect(functions.isHexColor('zzzzzz')).toBe(false);
});

test('test invalid hex color 2', () => {
    expect(functions.isHexColor('fff0')).toBe(false);
});