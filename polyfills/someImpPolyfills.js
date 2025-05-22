function myCallFunc(item1, item2, item3) {

    console.log(`hi ${this.name},your age is ${this.age} ${item1} ${item2} ${item3}`)

}


let obj = {
    name: "afzal",
    age: 24,
    add: 'New Delhi'
}
let obj2 = {
    name: "AHmad",
    age: 25,
    add: 'Delhi'
}




// myCallFunc.call(obj, "arg1", 2, "arg2")
// myCallFunc.call(obj2, "arg3", 5, "arg4")


Function.prototype.myCall = function (context, ...args) {
    context.myRefFunc = this
    context.myRefFunc(...args)

}

Function.prototype.myApply = function (context, args) {
    context.myRefFunc = this
    context.myRefFunc(args)

}

myCallFunc.myCall(obj, 'arg5', 6, 'arg8')
myCallFunc.myCall(obj2, 'arg5', 6, 'arg8')

myCallFunc.myApply(obj, ['arg5', 6, 'arg8'])
myCallFunc.myApply(obj2, ['arg5', 6, 'arg8'])





function abstractEqualityPollyFill(a, b) {
    if (typeof a === typeof b) return a === b

    if (a === null && b === undefined) return true
    if (a === undefined && b === a) return true

    if (typeof a === 'object') {
        return abstractEqualityPollyFill(String(a), b)
    }
    if (typeof b === 'object') {
        return abstractEqualityPollyFill(a, String(b))
    }

    return Number(a) === Number(b)
}


checker(1, 1)
checker(1, "1")
checker([], {})
checker(NaN, undefined)
checker('hi', ["hi"])
checker(null, undefined)
checker([], false)
checker({}, "[object Object]")
checker("", false)
checker(true, 1)


function checker(a, b) {
    console.log("og", a == b)
    console.log(abstractEqualityPollyFill(a, b))
    console.log("----------")
}

