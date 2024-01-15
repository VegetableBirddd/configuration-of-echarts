/**
 * 将数组或对象转化为字符串
 */
const typings = {
    number: '[object Number]',
    string: '[object String]',
    boolean: '[object Boolean]',
    symbol: '[object Symbol]',
    bigInt: '[object BigInt]',
    null: '[object Null]',
    undefined: '[object Undefined]',
    object: '[object Object]',
    array: '[object Array]',
    regExp: '[object RegExp]',
    math: '[object Math]',
    map: '[object Map]',
    set: '[object Set]',
    function: '[object Function]',
    generator: '[object GeneratorFunction]',
    async: '[object AsyncFunction]',
    asyncGenerator: '[object AsyncGeneratorFunction]',
    arrayBuffer: '[object ArrayBuffer]'
}
 
const classReg = /^class/
const arrowReg = /=\>/
const funcReg = /^function/
const asyncFuncReg = /^async\s+function/
const asyncGeneratorReg = /^async\s+\*function/
 
/**
 * 主函数
 * @param {object | array} val 
 * @returns {string}
 */
export function stringify(val) {
    const type = getType(val)
    // 处理边界
    if (
        type !== typings.object &&
        type !== typings.array
    ) {
        throw new TypeError('Arguments are not arrays or objects')
    }
 
    return handler(val, type, 1)
}
 
/**
 * 处理器
 * @param {any} val 
 * @param {string} type 
 * @returns {string}
 */
function handler(val, type, level) {
    switch (type) {
        case typings.number:
            return createNum(val)
        case typings.string:
            return createStr(val)
        case typings.boolean:
            return createBool(val)
        case typings.null:
            return createNull()
        case typings.undefined:
            return createUndefined()
        case typings.bigInt:
            return createBigInt(val)
        case typings.symbol:
            return createSymbol(val)
        case typings.function:
            return createFunc(val)
        case typings.generator:
            return createGenerator(val)
        case typings.async:
            return createAsync(val)
        case typings.asyncGenerator:
            return createAsyncGenerator(val)
        case typings.object:
            return createObj(val,level)
        case typings.array:
            return createArr(val,level)
        case typings.map:
            return createMap(val,level)
        case typings.set:
            return createSet(val,level)
        case typings.regExp:
            return createRegExp(val)
        case typings.math:
            return createMath()
        case typings.arrayBuffer:
            return createBuffer(val)
        default:
            return
    }
}
 
/**
 * 创建函数
 */
function createNum(num) {
    return num
}
 
function createStr(str) {
    return `"${str}"`
}
 
function createBool(bool) {
    return bool ? 'true' : 'false'
}
 
function createNull() {
    return 'null'
}
 
function createUndefined() {
    return 'undefined'
}
 
function createBigInt(bigInt) {
    return bigInt.toString() + 'n'
}
 
function createSymbol(symbol) {
    const description = symbol.description
    const isFor = Symbol.for(description) === symbol
 
    function isVoid(val) {
        return val === undefined || val === ''
    }
    return isFor ? `Symbol.for(${isVoid(description) ? '' : `'${description}'`})` : `Symbol(${isVoid(description) ? '' : `'${description}'`})`
}
 
function createFunc(func) {
    const funcStr = func.toString()
 
    if (funcReg.test(funcStr) || arrowReg.test(funcStr) || classReg.test(funcStr)) {
        return funcStr
    } else {
        return `function ${funcStr}`
    }
}
 
function createGenerator(generator) {
    const generatorStr = generator.toString()
 
    return funcReg.test(generatorStr) ? generatorStr : `function ${generatorStr}`
}
 
function createAsync(asyncFunc) {
    const asyncFuncStr = asyncFunc.toString()
 
    if (asyncFuncReg.test(asyncFuncStr) || arrowReg.test(asyncFuncStr)) {
        return asyncFuncStr
    } else {
        return asyncFuncStr.replace('async ', 'async function ')
    }
}
 
function createAsyncGenerator(asyncGenerator) {
    const asyncGeneratorStr = asyncGenerator.toString()
 
    return asyncGeneratorReg.test(asyncGeneratorStr) ? asyncGeneratorStr : asyncGeneratorStr.replace('async *', 'async function*')
}
 
function createObj(obj,level) {
    let blank = '';
    for(let i=0;i<level;i++){
        blank+='  '
    }
    let start = '{\n'
    let end = `\n${blank.slice(2)}}`
    let res = ''
 
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            res += `${blank}"${key}": ${handler(obj[key], getType(obj[key]), level+1)},\n`
        }
    }
    const symbolList = Object.getOwnPropertySymbols(obj)
    for (const symbol of symbolList) {
        const symbolStr = createSymbol(symbol)
        res += `[${symbolStr}]: ${handler(obj[symbol], getType(obj[symbol]), level+1)},\n`
    }
 
    return start + res.slice(0, -1) + end
}
 
function createArr(arr, level) {
    let start = '['
    let end = ']'
    let res = ''
 
    for (const item of arr) {
        res += handler(item, getType(item),level) + ','
    }
 
    return start + res.slice(0, -1) + end
}
 
function createMap(map,level) {
    let start = 'new Map(['
    let end = '])'
    let res = ''
    map.forEach((val, key) => {
        res += `[${handler(key, getType(key),level)}, ${handler(val, getType(val),level)}],`
    })
 
    return start + res.slice(0, -1) + end
}
 
function createSet(set,level) {
    let start = 'new Set('
    let end = ')'
 
    return start + createArr([...set],level) + end
}
 
function createRegExp(regExp) {
    return regExp
}
 
function createMath() {
    return 'Math'
}
 
function createBuffer(arrayBuffer) {
    return `new ArrayBuffer(${arrayBuffer.byteLength})`
}
 
/**
 * 封装Object.toString方法
 * @param {any} val 
 * @returns {string}
 */
function getType(val) {
    return Object.prototype.toString.call(val)
}