/*
 * @Author: tackchen
 * @Date: 2021-03-16 16:44:03
 * @LastEditors: tackchen
 * @LastEditTime: 2021-03-17 15:39:35
 * @FilePath: \ts-jest-demo\src\math\__tests__\add.spec.ts
 * @Description: Coding something
 */
import {add} from '../add';

test('test add', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});