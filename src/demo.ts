/*
 * @Author: tackchen
 * @Date: 2021-03-16 17:22:00
 * @LastEditors: tackchen
 * @LastEditTime: 2021-03-17 15:47:17
 * @FilePath: \ts-jest-demo\src\demo.ts
 * @Description: Coding something
 */

const bool: boolean = false;
const num: number = 6;
const str: string = 'str';
const obj: object = {};
const array: number[] = [1, 2, 3];
const v: any = '';
enum Color {Red, Green, Blue}

const bool2 = false;

// null undefined never

function add (a: number, b: number): number {
    return a + b;
}

function add2 (a: number, b: number, c: number = 0): number {
    return a + b + c;
}

function log (obj: {msg: string}): void {
    console.log(obj.msg);
}

function log2 ({
    msg,
    msg2 = ''
}: {
    msg: string;
    msg2?: string;
}): void {
    console.log(msg + msg2);
}


// 类型断言
const cond = false;

const someValue: string | number = cond ? 'str' : 1;

const someValueStr: string = someValue as string;
const someValueStr2: string = <string>someValue;

class Person {
    constructor () {}

    private name: string = '';

    public hello () {
        console.log(`my name is ${this.name}`);
        this.eat();
    }

    private eat () {}

    protected drink () {}
}

class Men extends Person {
    sex: number = 1;
    constructor () {
        super();
    }
}


interface ICar {
    name: string;
    price: number;
    brand: string;
    owner?: string;
    drive(speed: number): void;
}

interface IDemo {
    model: string;
}

interface ISUVCar extends ICar, IDemo {
    height: number;
}

interface IAddFunc {
    (a: number, b: number): number;
    name: 'add-func';
}

type TNumberOrStr = number | string;

type TSex = 'men' | 'women';


const car: ICar = {
    name: '',
    price: 1000000,
    brand: 'string',
    drive (speed: number) {
        console.log(speed);
    }
};

function buildACar (name: string): ICar {
    return {
        name: name,
        price: 1000000,
        brand: 'xxx',
        drive () {}
    };
}

function driveACar (car: ICar) {
    car.drive(100);
}

const numberOrStr: TNumberOrStr = cond ? 'str' : 1;

const sex: TSex = 'men';

function changeCarName<T extends ICar = ICar> (car: T, name: string): T {
    car.name = name;
    return car;
}

const suv: ISUVCar = {
    model: 'xx',
    height: 170,
    name: '',
    price: 1000000,
    brand: 'string',
    drive () {}
};

changeCarName<ISUVCar>(suv, 'new name');

// 接口中使用泛型
interface IJson<T = any> {
    [prop: string]: T;
}

const json: IJson<string> = {
    name: 'xxx'
};


console.log(bool, num, str, array, Color, Person, obj, v, add, log, someValueStr, bool2, someValueStr2, Men, car, buildACar, driveACar, add2, log2, numberOrStr, sex, json);


