/*
 * @Author: tackchen
 * @Date: 2021-03-16 16:54:54
 * @LastEditors: tackchen
 * @LastEditTime: 2021-03-16 16:55:43
 * @FilePath: \ts-jest-demo\src\math\__tests__\subtract.spec.ts
 * @Description: Coding something
 */
import {subtract} from '../subtract';

test('test subtract', () => {
    const result = subtract(3, 2);
    expect(result).toBe(1);
});