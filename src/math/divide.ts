/*
 * @Author: tackchen
 * @Date: 2021-03-16 16:29:37
 * @LastEditors: tackchen
 * @LastEditTime: 2021-03-16 16:33:42
 * @FilePath: \ts-jest-demo\src\divide.ts
 * @Description: Coding something
 */
export function divide (a: number, b: number): number {
    return (b === 0) ? Infinity : (a / b);
}