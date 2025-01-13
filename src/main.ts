// ======== Type Aliases ========

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean, // ? - optional field
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// interface UserId2 = stringOrNumber // not ok


// ========== Literal type ========

let myName: 'Oleg'

let userName: 'Dave' | 'John' | 'Amy'

userName = 'John'

// ======= functions ==========

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello!')
logMsg(add(2,3))
// logMsg(add('a', 3)) // not ok 

let subtract = function (c:number, d: number): number {
    return c - d
}

logMsg(subtract(5,3))

type mathFunction = (a: number, b: number) => number
//== OR ==
interface mathFunctionI {
    (a: number, b: number): number
}

let multiply: mathFunction = function (c,d) {
    return c * d
}

logMsg(multiply(2,2))

// ====== optional parameters =========

const  addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined')
        return a + b + c
    return a + b
}

const  sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

// ===== Resp Parameters ====

const total = (a: number, ...nums: number[]) => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4))

// ==== never type ===

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true){
        i++
        if (i > 100)
            break  // with out the type is NEVER!!!!
    } 
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'string'
        ? true : false
}

// use of the NEVER type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string')
        return 'string'
    if (isNumber(value))
        return 'number'
    return createError('This should never happen!')
}
