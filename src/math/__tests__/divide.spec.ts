/*
 * @Author: tackchen
 * @Date: 2021-03-16 16:54:54
 * @LastEditors: tackchen
 * @LastEditTime: 2021-03-16 16:58:17
 * @FilePath: \ts-jest-demo\src\math\__tests__\divide.spec.ts
 * @Description: Coding something
 */
import {divide} from '../divide';

test('test divide', () => {
    const result = divide(4, 2);
    expect(result).toBe(2);
});

test('test divide 0', () => {
    const result = divide(4, 0);
    expect(result).toBe(Infinity);
});